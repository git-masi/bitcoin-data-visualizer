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

  async getPriceIndexData(currency, start, end) {
    // console.log('getting data')
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
    // console.log(arr, avg, deviation, square, sum, volatility);
    return volatility;
  }

  //INFINITE LOOP
  //================================================================

  // async cardText() {
  //   let output = [];
  //   for (let r of this.props.volatilityRanges) {
  //     const dates = getDateRange(r)
  //     this.getPriceIndexData('USD', dates[1], dates[0])
  //       .then(data => Object.values(data.bpi))
  //       .then(vals => this.calcVolatility(vals))
  //       .then(vol => output.push(vol))
  //   }
  //   this.setState({volatility: output})
  // }

  // <Card.Text>{r} ${vol.toFixed(2)}</Card.Text>
  
  // componentDidUpdate(prevProps, prevState) {
  //   Object.entries(this.props).forEach(([key, val]) =>
  //     prevProps[key] !== val && console.log(`Prop '${key}' changed`)
  //   );
  //   Object.entries(this.state).forEach(([key, val]) =>
  //     prevState[key] !== val && console.log(`State '${key}' changed`)
  //   );
  // }

  render() {
    this.cardText();
    return (
      <Card>
        <Card.Header>Historical Price Volatility</Card.Header>
        <Card.Body>
          {/* <Card.Text>7 Day: </Card.Text>
          <Card.Text>30 Day: </Card.Text>
          <Card.Text>TYD: </Card.Text>
          <Card.Text>Past Year: </Card.Text>
          <Card.Text>All Time: </Card.Text> */}
          {/* { cardText() } */}
        </Card.Body>
      </Card>
    )
  }
}

export default VolatilityIndex;