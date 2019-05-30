import React, { Component, Fragment } from 'react';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
import VolatilityIndex from './VolatilityIndex';
import InvestForm from './InvestForm';
import finance from 'financejs';
  
class Invest extends Component {
  state = {
    purchasePrice: 0,
    salePrice: 0,
  }

  formSubmitHandler = (purDate, saleDate) => {
    const currency = 'USD';

    const getPriceIndexData = async (date) => {
      const response = await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}&start=${date}&end=${date}`);
      let data = await response.json();
      return data;
    }

    getPriceIndexData(purDate)
      .then(d => d.bpi)
      .then(p => this.setState({purchasePrice: Object.values(p)[0]}))
      .catch(err => console.log(err))

    getPriceIndexData(saleDate)
      .then(d => d.bpi)
      .then(p => this.setState({salePrice: Object.values(p)[0]}))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Fragment>
        <Navigation/>
        <Container className="mb-4">
          <Row>
            <Col md={4}>
              <InvestForm formSubmitHandler={this.formSubmitHandler}/>
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