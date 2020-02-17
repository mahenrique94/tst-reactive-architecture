const selectors = {
    getObj: state => state.homeReducers.obj,
    getList: state => state.homeReducers.list,
    getErrors: state => state.homeReducers.errors,
    getLoading: state => state.homeReducers.loading,
}

export { selectors }
