"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add altering commands here.
         *
         * Example:
         *
         */
        await queryInterface.createTable("school", {
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
        });
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         *
         */
        await queryInterface.dropTable("school");
    },
};
