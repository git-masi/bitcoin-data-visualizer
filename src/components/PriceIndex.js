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
    isLoaded: false,
  }

  formSubmitHandler = (obj) => {
    this.setState({
      currency: obj.currency,
      startDate: obj.startDate,
      endDate: obj.endDate,
    })
  }

  loadChart = () => {
    this.setState({isLoaded: true});
  }

  componentDidUpdate() {
    if (this.state.startDate && this.state.endDate && !this.state.isLoaded) this.loadChart();
  }


  render() {
    // const { currency, startDate, endDate} = this.state;

    return (
      <Fragment>
        <Navigation />
        <Container className="my-4">
          <Row>
            <Col md={4}>
              <PriceIndexForm formSubmitHandler={this.formSubmitHandler}/>
            </Col>
            <Col md={8}>
              {
                this.state.isLoaded && 
                <PriceIndexChart
                  currency={this.state.currency}
                  start={this.state.startDate}
                  end={this.state.endDate}
                />
              }
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default PriceIndex;