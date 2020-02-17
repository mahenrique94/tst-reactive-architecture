'use strict'
module.exports = (sequelize, DataTypes) => {
    const PatientsHistories = sequelize.define(
        'PatientsHistories',
        {
            name: DataTypes.STRING,
            age: DataTypes.INTEGER,
            patient_id: DataTypes.INTEGER,
            active: DataTypes.BOOLEAN,
        },
        {
            underscored: true,
        },
    )
    PatientsHistories.associate = function(models) {
        PatientsHistories.belongsTo(models.Patients, { foreignKey: 'patient_id', as: 'patient' })
    }
    return PatientsHistories
}
