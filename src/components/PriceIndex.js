import React, { Component, Fragment } from 'react';
import Navigation from './Navigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PriceIndexForm from './PriceIndexForm';
// import PriceIndexChart from './PriceIndexChart';
import PriceIndexChart from './PriceIndexChart/PriceIndexChart';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import styles from './PriceIndex.module.css';

class PriceIndex extends Component {
  state = {
    currency: 'USD',
    startDate: '',
    endDate: '',
    labels: [],
    data: [],
    prices: [],
  };

  formSubmitHandler = (obj) => {
    this.setState({
      currency: obj.currency,
      startDate: obj.startDate,
      endDate: obj.endDate,
    });
  };

  // not sure what this does but it gets rid of the error
  // throws a DOMException though
  // I should ask about this
  controller = new AbortController();

  componentDidUpdate(prevProps, prevState) {
    const getPriceIndexData = async () => {
      // console.log('getting data')
      const response = await fetch(
        `https://api.coindesk.com/v1/bpi/historical/close.json?currency=${this.state.currency}&start=${this.state.startDate}&end=${this.state.endDate}`,
        {
          signal: this.controller.signal,
        }
      );
      let data = await response.json();
      return data;
    };

    // console.log(prevState.endDate, this.state.endDate, prevState.startDate, this.state.startDate);
    if (
      prevState.endDate !== this.state.endDate ||
      prevState.startDate !== this.state.startDate
    ) {
      // console.log('inside the if statement')
      getPriceIndexData()
        .then((d) =>
          this.setState({
            labels: Object.keys(d.bpi),
            prices: Object.values(d.bpi),
            data: d.bpi,
            isLoaded: true,
          })
        )
        .catch((err) => console.log(err));
    }

    // this.controller.abort();

    // Object.entries(this.props).forEach(([key, val]) =>
    //   prevProps[key] !== val && console.log(`Prop '${key}' changed`)
    // );
    // Object.entries(this.state).forEach(([key, val]) =>
    //   prevState[key] !== val && console.log(`State '${key}' changed`)
    // );
  }

  componentWillUnmount() {
    this.controller.abort();
  }

  render() {
    const getMaxMinAvg = () => {
      if (this.state.prices.length <= 0) return;
      const prices = [...this.state.prices];
      const max = Math.max(...prices).toFixed(2);
      const min = Math.min(...prices).toFixed(2);
      const avg = (
        prices.reduce((previous, current) => (current += previous)) /
        prices.length
      ).toFixed(2);
      const median = prices[Math.floor(prices.length / 2)].toFixed(2);
      return (
        <Card body className={`mt-2 ${styles.minMax}`}>
          <Card.Text>
            <Badge variant='danger'>Low:</Badge> {min}
          </Card.Text>
          <Card.Text>
            <Badge variant='success'>High:</Badge> {max}
          </Card.Text>
          <Card.Text>
            <Badge variant='info'>Average:</Badge> {avg}
          </Card.Text>
          <Card.Text>
            <Badge variant='secondary'>Median:</Badge> {median}
          </Card.Text>
        </Card>
      );
    };

    return (
      <Fragment>
        <Navigation />
        <Container className='my-4'>
          <Row>
            <Col md={4}>
              <PriceIndexForm formSubmitHandler={this.formSubmitHandler} />
            </Col>
            <Col md={8}>
              <PriceIndexChart
                currency={this.state.currency}
                data={this.state.data}
                labels={this.state.labels}
              />
              {getMaxMinAvg()}
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default PriceIndex;
