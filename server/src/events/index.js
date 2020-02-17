const registerPatientEvents = require('./patient')

const registerEvents = (...params) => {
    registerPatientEvents(...params)
}

module.exports = registerEvents
