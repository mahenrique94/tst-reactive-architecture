import { events } from '../constants/events'
import { socket } from '../_config/socket'
import { store } from '../_config/store'
import { actions } from '../actions/home'

socket.on(events.PATIENT_SCHEMA_ERROR, data => store.dispatch(actions.setError(data)))
socket.on(events.PATIENT_CREATE, data => store.dispatch(actions.addList(data)))
socket.on(events.PATIENT_GET_ALL, data => store.dispatch(actions.setList(data)))
socket.on(events.PATIENT_GET_ONE, data => store.dispatch(actions.setObj(data)))
socket.on(events.PATIENT_UPDATE, data => store.dispatch(actions.updateList(data)))
socket.on(events.PATIENT_REMOVE, data => store.dispatch(actions.removeList(data)))
