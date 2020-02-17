const db = require('../database/models')
const extendsModel = require('./model')

module.exports = extendsModel(db.Patients)
