import { combineReducers } from 'redux'

import { reducers as homeReducers } from './home'

const reducers = combineReducers({
    homeReducers,
})

export { reducers }
