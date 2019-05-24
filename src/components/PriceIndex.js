import React, { Component, Fragment } from 'react';
import Navigation from './Navigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PriceIndexForm from './PriceIndexForm';
import PriceIndexChart from './PriceIndexChart';
  
class PriceIndex extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Container className="my-4">
          <Row>
            <Col md={4}>
              <PriceIndexForm />
            </Col>
            <Col md={8}>
              <PriceIndexChart />
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default PriceIndex;