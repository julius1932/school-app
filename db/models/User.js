const Sequelize = require("sequelize");
module.exports = (sequelize) => {
    const User = sequelize.define(
        "User",
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            role: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            salt: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            schoolId:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },

        },
        {
            tableName: "User",
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
    return User;
};
