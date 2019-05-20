import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" render={routeProps => <Home {...routeProps}/>}/>
    </Switch>
  )
}

export default Routes;