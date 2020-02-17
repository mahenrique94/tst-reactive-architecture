'use strict'
module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('patients_histories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            age: {
                type: Sequelize.INTEGER,
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        }),
    down: queryInterface => queryInterface.dropTable('patients_histories'),
}
