import React, { Component, Fragment } from 'react';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InvestForm from './InvestForm';
import InvestResults from './InvestResults';
import VolatilityIndex from './VolatilityIndex';

const Finance = require('financejs');
const finance = new Finance();
  
class Invest extends Component {
  state = {
    curPrice: 0,
    purchasePrice: 0,
    salePrice: 0,
    purchaseQuant: 0,
    saleQuant: 0,
    ROI: 0,
  }

  formSubmitHandler = (formObj) => {
    const currency = 'USD';

    const getBitcoinPrice = async () => {
      const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
      let data = await response.json();
      return data;
    }

    getBitcoinPrice()
      .then(data => data.bpi.USD.rate_float)
      .then(rate => this.setState({curPrice: rate}))

    const getPriceIndexData = async (date) => {
      const response = await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}&start=${date}&end=${date}`);
      let data = await response.json();
      return data;
    }

    getPriceIndexData(formObj.purchaseDate)
      .then(d => d.bpi)
      .then(p => this.setState({purchasePrice: Object.values(p)[0]}))
      .catch(err => console.log(err))

    getPriceIndexData(formObj.saleDate)
      .then(d => d.bpi)
      .then(p => this.setState({salePrice: Object.values(p)[0]}, () => this.getStats(formObj)))
      .catch(err => console.log(err))
  }

  getStats = (obj) => {
    this.setState({purchaseQuant: Number(obj.purchaseQuant), saleQuant: Number(obj.saleQuant)}, () => this.getROI())
  }

  getROI = () => {
    const roi = finance.ROI(this.state.purchasePrice, this.state.salePrice);
    this.setState({ROI: roi});
  }

  render() {
    const { curPrice, salePrice, purchasePrice, saleQuant, purchaseQuant, ROI } = this.state;
    return (
      <Fragment>
        <Navigation/>
        <Container className="mb-4">
          <Row>
            <Col lg={4}>
              <InvestForm formSubmitHandler={this.formSubmitHandler}/>
            </Col>
            <InvestResults
              curPrice={curPrice}
              salePrice={salePrice}
              purchasePrice={purchasePrice}
              saleQuant={saleQuant}
              purchaseQuant={purchaseQuant}
              ROI={ROI}
            />
          </Row>
          <Row className="mt-3">
            <VolatilityIndex />
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Invest;