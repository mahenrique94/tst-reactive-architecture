import { combineEpics } from 'redux-observable'
import { epics as homeEpics } from './home'

const epics = combineEpics(...homeEpics)

export { epics }
