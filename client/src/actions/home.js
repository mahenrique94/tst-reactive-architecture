import { actionsTypes } from '../constants/actionsTypes'

const addList = payload => ({
    type: actionsTypes.HOME_ADD_LIST,
    payload,
})

const save = payload => ({
    type: actionsTypes.HOME_SAVE,
    payload,
})

const cancel = () => ({
    type: actionsTypes.HOME_SAVE_CANCEL,
})

const setError = error => ({
    type: actionsTypes.HOME_SET_ERROR,
    payload: error,
})

const list = () => ({
    type: actionsTypes.HOME_LIST,
})

const setList = payload => ({
    type: actionsTypes.HOME_SET_LIST,
    payload,
})

const edit = payload => ({
    type: actionsTypes.HOME_EDIT,
    payload,
})

const setObj = payload => ({
    type: actionsTypes.HOME_SET_OBJ,
    payload,
})

const remove = payload => ({
    type: actionsTypes.HOME_REMOVE,
    payload,
})

const removeList = payload => ({
    type: actionsTypes.HOME_REMOVE_LIST,
    payload,
})

const updateList = payload => ({
    type: actionsTypes.HOME_UPDATE_LIST,
    payload,
})

const actions = {
    addList,
    save,
    cancel,
    setError,
    list,
    setList,
    edit,
    setObj,
    remove,
    removeList,
    updateList,
}

export { actions }
