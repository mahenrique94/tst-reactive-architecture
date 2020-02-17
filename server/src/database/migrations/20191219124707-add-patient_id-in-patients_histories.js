'use strict'

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.addColumn('patients_histories', 'patient_id', {
            type: Sequelize.INTEGER,
            references: {
                model: 'patients',
                key: 'id',
            },
        }),
    down: queryInterface => queryInterface.removeColumn('patients_histories', 'patient_id'),
}
