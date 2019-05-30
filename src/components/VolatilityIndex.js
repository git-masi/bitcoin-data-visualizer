import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import getDateRange from '../dates';

class VolatilityIndex extends Component {
  static defaultProps = {
    volatilityRanges: ['Past 7 Days', 'Past 30 Days', 'YTD', 'Past Year', 'All Time'],
  }

  state = {
    volatility: [],
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

  componentDidMount() {
    const dates = []
    for (let r of this.props.volatilityRanges) {
      dates.push(getDateRange(r));
    }

    for (let date of dates) {
      this.getPriceIndexData('USD', date[1], date[0])
        .then(data => Object.values(data.bpi))
        .then(val => this.calcVolatility(val))
        .then(vol => this.setState({volatility: [...this.state.volatility, vol]}))
    }
  }

  render() {
    const cardText = this.state.volatility.map((el, i) => {
      return <Card.Text key={i}>{this.props.volatilityRanges[i]}: ${el.toFixed(2)}</Card.Text>
    })

    return (
      <Card>
        <Card.Header>Historical Price Volatility</Card.Header>
        <Card.Body>
          { cardText }
        </Card.Body>
      </Card>
    )
  }
}

export default VolatilityIndex;