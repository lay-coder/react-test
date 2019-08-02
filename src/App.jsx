import React from 'react'
import 'element-theme-default'
import { Button } from 'element-react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import 'App.scss'
import LayoutShow from 'views/show/layout-show/index'
import LayoutConsole from 'views/console/layout-console/index'
import { getAreaList } from 'api/test'
// import axios from 'axios'

export default class APP extends React.Component {
  async clickTest() {
    const response = await getAreaList()
    console.log(response.body)
  }
  render() {
    return (
      <BrowserRouter>
        <Link to="/show">
          <Button type="primary">show</Button>
        </Link>
        <Link to="/console">
          <Button type="primary">console</Button>
        </Link>
        <Button onClick={() => this.clickTest()} />
        <Switch>
          <Route path="/show" component={LayoutShow} />
          <Route path="/console" component={LayoutConsole} />
        </Switch>
      </BrowserRouter>
    )
  }
}
