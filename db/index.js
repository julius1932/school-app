const { Sequelize } = require("sequelize");
const config = require("config");

const SchoolModel = require("./models/school");
const TeacherModel = require("./models/teacher");
const KlassModel = require("./models/klass");
const StudentModel = require("./models/student");
const UserModel = require("./models/user");

/*const AdvertiserModel = require("./models/Advertiser");
const PublisherModel = require("./models/Publisher");
const WalletModel = require("./models/Wallet");
const CampaignModel = require("./models/Campaign");
const OfferModel = require("./models/Offer");*/

const settings = ({ database, username, password, host } = config.get("db"));

const db = new Sequelize({
  ...settings,
});

//export const models = db.models;
const School = SchoolModel(db, Sequelize);
const Teacher = TeacherModel(db, Sequelize);
const Klass = KlassModel(db, Sequelize);
const Student = StudentModel(db, Sequelize);
const User = UserModel(db, Sequelize);


/*const Advertiser = AdvertiserModel(db, Sequelize);
const Publisher = PublisherModel(db, Sequelize);
const Wallet = WalletModel(db, Sequelize);
const Campaign = CampaignModel(db, Sequelize);
const Offer = OfferModel(db, Sequelize);*/

School.hasMany(Teacher);
School.hasMany(Klass);
Klass.belongsTo(School);


User.belongsTo(Teacher)
User.belongsTo(Student)




/*Wallet.belongsTo(Advertiser, { foreignKey: "advertiserId" });
Campaign.belongsTo(Advertiser, { foreignKey: "advertiserId" });
Advertiser.hasMany(Campaign);
Offer.belongsTo(Campaign, { foreignKey: "campaignId" });*/
//Advert.belongsTo(Offer,{foreignKey: 'offerId'});
//Campaign.belongsTo(RemoteFeed,{foreignKey: 'remoteFeedId'});
//Advertiser.hasMany(DispayWebsites)

db.sync({ force: false }).then(() => {
  console.log(`Database & tables created here!`);
});
module.exports = {
  School,
  User,
  Teacher,
  Student,
  Klass,
  db,
};
