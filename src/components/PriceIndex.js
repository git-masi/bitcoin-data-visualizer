import React, { Component, Fragment } from 'react';
import Navigation from './Navigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PriceIndexForm from './PriceIndexForm';
import PriceIndexChart from './PriceIndexChart';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import styles from './PriceIndex.module.css';

class PriceIndex extends Component {
  state = {
    currency: 'USD',
    startDate: '',
    endDate: '',
    charts: [],
    labels: [],
    data: [],
    max: 0,
    min: 0,
    average: 0,
    // isLoaded: false,
  }

  formSubmitHandler = (obj) => {
    this.setState({
      currency: obj.currency,
      startDate: obj.startDate,
      endDate: obj.endDate,
      // isLoaded: false,
      charts: [obj],
    })
  }

  async getPriceIndexData() {
    const response = await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${this.state.currency}&start=${this.state.startDate}&end=${this.state.endDate}`,{
      signal: this.controller.signal
    });
    let data = await response.json();
    return data;
  }

  // not sure what this does but it gets rid of the error
  // throws a DOMException though
  // I should ask about this
  controller = new AbortController();

  componentDidUpdate() {
    this.getPriceIndexData()
      .then(d => this.setState({
        labels: Object.keys(d.bpi),
        data: Object.values(d.bpi),
        isLoaded: true,
      }))
      .catch(err => console.log(err))
  }

  componentWillUnmount() {
    // console.log('unmount');
    this.controller.abort();
  }


  render() {
    const getMaxMinAvg = () => {
      if (this.state.data.length <= 0) return;
      const data = [...this.state.data];
      const max = Math.max(...data).toFixed(2);
      const min = Math.min(...data).toFixed(2);
      const avg = (data.reduce((previous, current) => current += previous) / data.length).toFixed(2);
      const median = data[Math.floor(data.length / 2)].toFixed(2);
      return (
        <Card body className={`mt-2 ${styles.minMax}`}>
          <Card.Text>
            <Badge variant="danger">Low:</Badge> {min}
          </Card.Text>
          <Card.Text>
            <Badge variant="success">High:</Badge> {max}
          </Card.Text>
          <Card.Text>
            <Badge variant="info">Average:</Badge> {avg}
          </Card.Text>
          <Card.Text>
            <Badge variant="secondary">Median:</Badge> {median}
          </Card.Text>
        </Card>
      )
    }

    return (
      <Fragment>
        <Navigation />
        <Container className="my-4">
          <Row>
            <Col md={4}>
              <PriceIndexForm formSubmitHandler={this.formSubmitHandler}/>
            </Col>
            <Col md={8}>
              <PriceIndexChart currency={this.state.currency} data={this.state.data} labels={this.state.labels}/>
              { getMaxMinAvg() }
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default PriceIndex;