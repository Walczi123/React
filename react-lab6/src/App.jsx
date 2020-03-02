import React from 'react'
//import Component from './Component'
import PageEmployeesList from './PageEmployeesList'
import PageEmployee from './PageEmployee'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Component from './Component';


const App = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/">
            <Component/>
        </Route>
        <Route exact path="/new">
            <PageEmployee/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App