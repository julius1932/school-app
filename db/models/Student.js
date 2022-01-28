const Sequelize = require("sequelize");
module.exports = (sequelize) => {
    const Student = sequelize.define(
        "Student",
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            surname: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            gender:{
                type: Sequelize.STRING,
                allowNull: true,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            mobile: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            dob:{
              type: Sequelize.STRING,
              allowNull: true,
            },
            address:{
              type: Sequelize.STRING,
              allowNull: true,
            },
            religion:{
                type: Sequelize.STRING,
                allowNull: true,
            },
            disabilities:{
                type: Sequelize.STRING,
                allowNull: true,
            },
            guardianName:{
              type: Sequelize.STRING,
              allowNull: true,
            },
            guardianRelationship:{
              type: Sequelize.STRING,
              allowNull: true,
            },
            copyOfBirth:{
                type: Sequelize.STRING,
                allowNull: true,
              },
            schoolId:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },

        },
        {
            tableName: "stundent",
            timestamps: true,
            classMethods: {
                queryExecuter: function (query) {
                    return new Promise(function (resolve, reject) {
                        sequelize.query(query).then(function (data) {
                            if (data) {
                                resolve(data[0]);
                            } else {
                                reject("Error occured");
                            }
                        });
                    });
                },
            },
        }
    );
    return Student;
};
