import React, { Component, Fragment } from 'react';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
// import Card from 'react-bootstrap/Card';
import VolatilityIndex from './VolatilityIndex';
  
class Invest extends Component {

  render() {
    return (
      <Fragment>
        <Navigation/>
        <Container className="mb-4">
          <VolatilityIndex />
        </Container>
      </Fragment>
    )
  }
}

export default Invest;