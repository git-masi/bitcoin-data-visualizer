import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" render={routeProps => <Home {...routeProps}/>}/>
      <Route exact path="/about" render={routeProps => <h1>this is the about page</h1>}/>
      <Route exact path="/invest" render={routeProps => <h1>this is the invest page</h1>}/>
      <Route exact path="/price-index" render={routeProps => <h1>this is the price index page</h1>}/>
    </Switch>
  )
}

export default Routes;