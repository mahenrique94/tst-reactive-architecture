import { actionsTypes } from '../constants/actionsTypes'
import { events } from '../constants/events'
import { of } from 'rxjs'
import { takeUntil, debounceTime, mergeMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { socket } from '../_config/socket'

const save = action$ =>
    action$.pipe(
        debounceTime(1000),
        ofType(actionsTypes.HOME_SAVE),
        mergeMap(({ payload }) => {
            const newPatient = { name: payload.name, age: parseInt(payload.age, 10) }
            if (payload.id) {
                socket.emit(events.PATIENT_UPDATE, { ...newPatient, id: payload.id, patient_id: payload.patient_id })
            } else {
                socket.emit(events.PATIENT_CREATE, newPatient)
            }
            return of()
        }),
        takeUntil(action$.pipe(ofType(actionsTypes.HOME_SAVE_CANCEL))),
    )

const list = action$ =>
    action$.pipe(
        ofType(actionsTypes.HOME_LIST),
        mergeMap(() => {
            socket.emit(events.PATIENT_GET_ALL)
            return of()
        }),
    )

const edit = action$ =>
    action$.pipe(
        ofType(actionsTypes.HOME_EDIT),
        mergeMap(action => {
            socket.emit(events.PATIENT_GET_ONE, action.payload)
            return of()
        }),
    )

const remove = action$ =>
    action$.pipe(
        ofType(actionsTypes.HOME_REMOVE),
        mergeMap(({ payload }) => {
            const newPatient = { name: payload.name, age: parseInt(payload.age, 10), id: payload.id, patient_id: payload.patient_id }
            socket.emit(events.PATIENT_REMOVE, newPatient)
            return of()
        }),
    )

const epics = [save, list, edit, remove]

export { epics }
