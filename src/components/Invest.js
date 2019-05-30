import React, { Component, Fragment } from 'react';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
import VolatilityIndex from './VolatilityIndex';
import InvestForm from './InvestForm';
  
class Invest extends Component {

  render() {
    return (
      <Fragment>
        <Navigation/>
        <Container className="mb-4">
          <Row>
            <Col md={4}>
              <InvestForm/>
            </Col>
            <Col>
              <VolatilityIndex />
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Invest;