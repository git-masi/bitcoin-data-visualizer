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
    test: [],
    isLoaded: false,
  }

  formSubmitHandler = (obj) => {
    this.setState({
      currency: obj.currency,
      startDate: obj.startDate,
      endDate: obj.endDate,
      test: [obj],
    })
  }

  loadChart = () => {
    this.setState({isLoaded: true});
  }

  componentDidUpdate() {
    if (this.state.startDate && this.state.endDate && !this.state.isLoaded) this.loadChart();
  }


  render() {
    // This seems like a janky way to render a single component
    // just couldn't seem to figure out how to get it to rerender on state update otherwise
    const chart = this.state.test.map(el =>
      <PriceIndexChart
        currency={el.currency}
        start={el.startDate}
        end={el.endDate}
        key={Math.floor(Math.random() * 10000)}
      />
    );

    return (
      <Fragment>
        <Navigation />
        <Container className="my-4">
          <Row>
            <Col md={4}>
              <PriceIndexForm formSubmitHandler={this.formSubmitHandler}/>
            </Col>
            <Col md={8}>
              { this.state.isLoaded && chart }
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default PriceIndex;