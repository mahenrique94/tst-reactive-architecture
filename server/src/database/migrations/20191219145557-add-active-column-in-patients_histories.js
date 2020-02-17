'use strict'

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.addColumn('patients_histories', 'active', {
            type: Sequelize.BOOLEAN,
            defaultValue: true,
        }),
    down: queryInterface => queryInterface.removeColumn('patients_histories', 'active'),
}
