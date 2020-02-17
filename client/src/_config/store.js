import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { epics } from '../epics'
import { reducers } from '../reducers'
import { createLogger } from 'redux-logger'

const reduxObservable = createEpicMiddleware()

const store = createStore(reducers, applyMiddleware(...[reduxObservable, createLogger()]))

reduxObservable.run(epics)

export { store }
