const db = require('../database/models')
const extendsModel = require('./model')

module.exports = {
    ...extendsModel(db.PatientsHistories),
    findOneRef: data => db.PatientsHistories.findOne({ where: { ...data, active: true }, limit: 1, order: [['created_at', 'desc']] }),
    findAllRef: () =>
        db.sequelize.query(
            'select * from patients_histories where id in (select max(id) from patients_histories group by patient_id having active = true)',
            { type: db.sequelize.QueryTypes.SELECT },
        ),
}
