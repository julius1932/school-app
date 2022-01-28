const Sequelize = require("sequelize");
module.exports = (sequelize) => {
    const Teacher = sequelize.define(
        "Teacher",
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
            email: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            mobile: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            schoolId:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: "teacher",
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
    return Teacher;
};
