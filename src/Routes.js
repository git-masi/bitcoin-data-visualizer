import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Invest from './components/Invest';
import PriceIndex from './components/PriceIndex';

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" render={routeProps => <Home {...routeProps}/>}/>
      <Route exact path="/about" render={routeProps => <About {...routeProps}/>}/>
      <Route exact path="/invest" render={routeProps => <Invest {...routeProps}/>}/>
      <Route exact path="/price-index" render={routeProps => <PriceIndex {...routeProps} />}/>
    </Switch>
  )
}

export default Routes;