import React from 'react'
import 'element-theme-default'
import { Button } from 'element-react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import 'App.scss'
import LayoutShow from 'views/show/layout-show/index'
import LayoutConsole from 'views/console/layout-console/index'

export default class APP extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Button type="primary">
          <Link to="/show">show</Link>
        </Button>
        <Button type="primary">
          <Link to="/console">console</Link>
        </Button>
        <Switch>
          <Route path="/show" component={LayoutShow} />
          <Route path="/console" component={LayoutConsole} />
        </Switch>
      </BrowserRouter>
    )
  }
}
