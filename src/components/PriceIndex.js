import React, { Component, Fragment } from 'react';
import Navigation from './Navigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PriceIndexForm from './PriceIndexForm';
import PriceIndexChart from './PriceIndexChart';
  
class PriceIndex extends Component {
  state = {
    currency: 'USD',
    startDate: '',
    endDate: '',
  }

  formSubmitHandler = (obj) => {
    this.setState({
      currency: obj.currency,
      startDate: obj.startDate,
      endDate: obj.endDate,
    })
    console.log('hello from the form submit handler');
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <Container className="my-4">
          <Row>
            <Col md={4}>
              <PriceIndexForm formSubmitHandler={this.formSubmitHandler}/>
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