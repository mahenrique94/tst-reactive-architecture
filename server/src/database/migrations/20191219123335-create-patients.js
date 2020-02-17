'use strict'
module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('patients', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
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
    down: queryInterface => queryInterface.dropTable('patients'),
}
