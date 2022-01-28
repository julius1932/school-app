const Sequelize = require("sequelize");
module.exports = (sequelize) => {
    const Klass = sequelize.define(
        "Klass",
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            level: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            category: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            schoolId:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: "klass",
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
    return Klass;
};
