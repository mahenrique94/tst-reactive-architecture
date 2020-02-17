import React from 'react'
import { Route, Router, Switch } from 'react-router'

import { history } from '../_config/history'

import Home from '../ioc/Home'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route component={Home} exact path="/" />
        </Switch>
    </Router>
)

export default Routes
