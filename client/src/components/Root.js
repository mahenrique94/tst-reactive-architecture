import React from 'react'
import { Provider } from 'react-redux'
import Routes from './Routes'
import { store } from '../_config/store'

const Root = () => (
    <Provider store={store}>
        <Routes />
    </Provider>
)

export default Root
