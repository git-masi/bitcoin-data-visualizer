import React, { Component, Fragment } from 'react';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
import VolatilityIndex from './VolatilityIndex';
import InvestForm from './InvestForm';

const Finance = require('financejs');
const finance = new Finance();
  
class Invest extends Component {
  state = {
    curPrice: 0,
    purchasePrice: 0,
    salePrice: 0,
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
    this.getROI(obj.saleQuant)
  }

  getROI = () => {
    const roi = finance.ROI(this.state.purchasePrice, this.state.salePrice);
    this.setState({ROI: roi});
  }

  // for whatever reason both prevProps and prevState need to be included as parameters
  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState.ROI, this.state.ROI)
  //   if (this.state.ROI === prevState.ROI) {
  //     const roi = finance.ROI(this.state.purchasePrice, this.state.salePrice);
  //     console.log(roi);
  //     this.setState({ROI: roi});

  //     // console.log('inside the roi');
  //     // this.getROI();
  //   }
  // }

  render() {

    return (
      <Fragment>
        <Navigation/>
        <Container className="mb-4">
          <Row>
            <Col md={4}>
              <InvestForm formSubmitHandler={this.formSubmitHandler}/>
            </Col>
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