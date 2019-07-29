import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'


import LayoutShow from '../views/show/layout-show/index.jsx'
import LayoutConsole from '../views/console/layout-console/index.jsx'

export default () => {
    <Router history={hashHistory}>
        <Route path="/" component={LayoutConsole} />
        <Route path="/show" component={LayoutShow} />
    </Router>
}