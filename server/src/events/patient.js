const { events } = require('../constants/events')
const Patients = require('../models/Patients')
const PatientsHistories = require('../models/PatientsHistories')
const Validator = require('fastest-validator')

const v = new Validator()

const registerEvent = (socket, io) => {
    socket.on(events.PATIENT_CREATE, async data => {
        const schema = {
            age: { type: 'number', min: 1, max: 100, positive: true, integer: true },
            name: { type: 'string', min: 1, max: 120 },
        }
        const errors = v.validate(data, schema)

        if (Array.isArray(errors) && errors.length) {
            return io.emit(events.PATIENT_SCHEMA_ERROR, errors)
        }

        const newPatient = await Patients.create()
        const newPatientHistory = await PatientsHistories.create({ ...data, patient_id: newPatient.id })
        return io.emit(events.PATIENT_CREATE, newPatientHistory)
    })

    socket.on(events.PATIENT_GET_ALL, async () => {
        io.emit(events.PATIENT_GET_ALL, await PatientsHistories.findAllRef())
    })

    socket.on(events.PATIENT_GET_ONE, async data => {
        io.emit(events.PATIENT_GET_ONE, await PatientsHistories.findOneRef({ patient_id: data.id }))
    })

    socket.on(events.PATIENT_UPDATE, async data => {
        delete data.id
        io.emit(events.PATIENT_UPDATE, await PatientsHistories.create(data))
    })

    socket.on(events.PATIENT_REMOVE, async data => {
        delete data.id
        io.emit(events.PATIENT_REMOVE, await PatientsHistories.create({ ...data, active: false }))
    })
}

module.exports = registerEvent
