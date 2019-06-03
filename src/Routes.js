import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Page from './components/Page';
import Home from './components/Home';
import About from './components/About';
import Invest from './components/Invest';
import PriceIndex from './components/PriceIndex';

const Routes = props => {
  return (
    <Route render={({ location }) => (
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          classNames="page"
          timeout={1000}
        >
          <Switch location={location}>
            <Route exact path="/" render={routeProps => (
              <Page>
                <Home {...routeProps}/>
              </Page>
            )}/>
            <Route exact path="/about" render={routeProps => (
              <Page>
                <About {...routeProps}/>
              </Page>
            )}/>
            <Route exact path="/invest" render={routeProps => (
              <Page>
                <Invest {...routeProps}/>
              </Page>
            )}/>
            <Route exact path="/price-index" render={routeProps => (
              <Page>
                <PriceIndex {...routeProps}/>
              </Page>
            )}/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )}/>
  )
}

export default Routes;