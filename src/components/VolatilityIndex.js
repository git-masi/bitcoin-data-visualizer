import React, {Component, Fragment} from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import Badge from 'react-bootstrap/Badge';
import { Bar, Line } from 'react-chartjs-2';
import getDateRange from '../dates';
import styles from './VolatilityIndex.module.css';

class VolatilityIndex extends Component {
  static defaultProps = {
    volatilityRanges: ['Past 7 Days', 'Past 30 Days', 'YTD', 'Past Year', 'All Time'],
    // volatilityRanges: ['All Time', 'Past Year', 'YTD', 'Past 30 Days', 'Past 7 Days'],
  }

  state = {
    labels: [],
    volatility: [],
    deviations: [],
  }

  async getBitcoinPrice() {
    const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    let data = await response.json();
    return data;
  }

  async getPriceIndexData(currency = 'USD', start, end) {
    const response = await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}&start=${start}&end=${end}`);
    let data = await response.json();
    return data;
  }

  calcVolatility = arr => {
    const avg = arr.reduce((previous, current) => current += previous) / arr.length;
    const deviation = arr.map(val => val - avg);
    const square = deviation.map(d => d**2);
    const sum = square.reduce((acc, cur) => acc += cur);
    const volatility = Math.sqrt(sum / arr.length);

    return volatility;
  }

  makeBarChart = canvas => {
    const chartData = {
      labels: this.props.volatilityRanges,
      datasets: [
        {
          label: 'Historical Volatility',
          data: this.state.volatility,
          borderColor: 'rgba(52, 73, 94, 1.0)',
          backgroundColor: 'rgba(189, 195, 199, .6)',
          borderWidth: 2,
        },
      ]
    }

    return chartData;
  }

  getStandardDeviations = () => {
    this.getBitcoinPrice()
      .then(data => data.bpi.USD.rate_float)
      .then(price => {
        const deviations = [];
        for (let i = -3; i < 4; i++) {
          deviations.push((price + (Number(this.state.volatility[0]) * i)).toFixed(2))
        }
        return deviations
      })
      .then(d => this.setState({deviations: d}))
  }

  setColorGradient = (canvas) => {
    const width = canvas.clientWidth;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, 'rgba(231, 76, 60, .7)');
    gradient.addColorStop((1/6), 'rgba(231, 76, 60, .7)');
    gradient.addColorStop((1/6), 'rgba(241, 196, 15, .7)');
    gradient.addColorStop((2/6), 'rgba(241, 196, 15, .7)');
    gradient.addColorStop((2/6), 'rgba(46, 204, 113, .7)');
    gradient.addColorStop((4/6), 'rgba(46, 204, 113, .7)');
    gradient.addColorStop((4/6), 'rgba(241, 196, 15, .7)');
    gradient.addColorStop((5/6), 'rgba(241, 196, 15, .7)');
    gradient.addColorStop((5/6), 'rgba(231, 76, 60, .7)');
    gradient.addColorStop(1, 'rgba(231, 76, 60, .7)');

    return gradient;
  }

  makeLineChart = canvas => {
    const chartData = {
      labels: this.state.deviations,
      datasets: [
        {
          label: 'Probability of Future 7 Day Price',
          data: [1.345, 8.115, 27.918, 42.3, 27.918, 8.115, 1.345],
          backgroundColor: this.setColorGradient(canvas),
          // backgroundColor: 'rgba(46, 204, 113, .6)',
          borderColor: 'rgba(52, 73, 94, 1.0)',
          borderWidth: 2,
          lineTension: .3,
          // xAxisID: 'Price',
        },
      ]
    }
    return chartData;
  }

  componentDidMount() {
    const dates = []
    for (let r of this.props.volatilityRanges) {
      dates.push(getDateRange(r));
    }

    // this doesn't run each iteration sequentially
    // it pushes the 'All Time' date last because it takes the longest to return
    // this is a problem if you want to show data from all time to the present day instead of the reverse
    for (let date of dates) {
      this.getPriceIndexData('USD', date[1], date[0])
        .then(data => Object.values(data.bpi))
        .then(val => this.calcVolatility(val).toFixed(2))
        .then(vol => this.setState({volatility: [...this.state.volatility, vol]}, () => this.getStandardDeviations()))
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   Object.entries(this.props).forEach(([key, val]) =>
  //     prevProps[key] !== val && console.log(`Prop '${key}' changed`)
  //   );
  //   Object.entries(this.state).forEach(([key, val]) =>
  //     prevState[key] !== val && console.log(`State '${key}' changed`)
  //   );
  // }

  // componentWillUnmount() {
  //   this.controller.abort();
  // }

  render() {
    // const cardText = this.state.volatility.map((el, i) => {
    //   return <Card.Text key={i}>{this.props.volatilityRanges[i]}: <Badge variant="secondary">${el}</Badge></Card.Text>
    // })

    return (
      <Fragment>
        <Col lg={6} className="mb-2">
          <Card>
            <Card.Header className="mb-2">Historical Price Volatility</Card.Header>
            <Bar
              options={{
                responsive: true,
                legend: false,
                scales: {
                  xAxes: [{
                    display: true,
                    scaleLabel: {
                      display: true,
                      labelString: 'Time Period',
                    }
                  }],
                  yAxes: [{
                    display: true,
                    scaleLabel: {
                      display: true,
                      labelString: 'Price (USD)',
                    }
                  }]
                }
              }}
              data={this.makeBarChart}
            />
            {/* <Card.Body className={styles.volatility}>
              { cardText }
            </Card.Body> */}
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header className="mb-2">Probability of Future 7 Day Price</Card.Header>
            <Line
              options={{
                responsive: true,
                legend: false,
                scales: {
                  xAxes: [{
                    display: true,
                    scaleLabel: {
                      display: true,
                      labelString: 'Price (USD)',
                    }
                  }],
                  yAxes: [{
                    display: true,
                    scaleLabel: {
                      display: true,
                      labelString: '% Probability',
                    }
                  }]
                }
              }}
              data={this.makeLineChart}
            />
          </Card>
        </Col>
      </Fragment>
    )
  }
}

export default VolatilityIndex;