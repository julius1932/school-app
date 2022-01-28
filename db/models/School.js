const Sequelize = require("sequelize");
module.exports = (sequelize) => {
    const School = sequelize.define(
        "School",
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
            email: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            mobile1: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            mobile2: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            phone1: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            phone2: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            district: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            address: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            country: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            website: {
                type: Sequelize.STRING,
                allowNull: true,
            },
        },
        {
            tableName: "school",
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
    return School;
};
