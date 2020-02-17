import { actionsTypes } from '../constants/actionsTypes'

const INITIAL_STATE = {
    list: [],
    obj: {},
    errors: [],
    loading: false,
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionsTypes.HOME_SAVE:
            return { ...state, loading: true }
        case actionsTypes.HOME_SAVE_CANCEL:
            return { ...state, loading: false }
        case actionsTypes.HOME_ADD_LIST:
            return { ...state, list: [...state.list, action.payload], loading: false, obj: {} }
        case actionsTypes.HOME_REMOVE_LIST:
            return { ...state, list: state.list.filter(i => i.patient_id !== action.payload.patient_id) }
        case actionsTypes.HOME_SET_OBJ:
            return { ...state, obj: action.payload }
        case actionsTypes.HOME_SET_ERROR:
            return { ...state, errors: action.payload, loading: false }
        case actionsTypes.HOME_SET_LIST:
            return { ...state, list: action.payload, obj: {} }
        case actionsTypes.HOME_UPDATE_LIST: {
            const newList = [...state.list]
            const patientIndex = newList.findIndex(item => item.patient_id === action.payload.patient_id)
            if (patientIndex >= 0) {
                newList.splice(patientIndex, 1, action.payload)
            }
            return { ...state, list: newList, loading: false, obj: {} }
        }
        default:
            return state
    }
}

export { reducers }
