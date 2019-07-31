import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Show from './views/show/index.jsx'
import Console from './views/console/index.jsx'

export default class APP extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/show" target="_blank">
          show
        </Link>
        <Link to="/console">console</Link>
        <Switch>
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <Route path="/show" component={Show} />
          <Route path="/console" component={Console} />
        </Switch>
      </BrowserRouter>
    )
  }
}
