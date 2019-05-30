import React from 'react';
import Card from 'react-bootstrap/Card';

const VolatilityIndex = props => {
  async function getPriceIndexData(currency, start, end) {
    // console.log('getting data')
    const response = await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}&start=${start}&end=${end}`);
    let data = await response.json();
    return data;
  }

  function calcVolatility(arr) {
    const avg = arr.reduce((previous, current) => current += previous) / arr.length;
    const deviation = arr.map(val => val - avg);
    const square = deviation.map(d => d**2);
    const sum = square.reduce((acc, cur) => acc += cur);
    const volatility = Math.sqrt(sum / arr.length);
    console.log(arr, avg, deviation, square, sum, volatility);
  }

  getPriceIndexData('USD', '2019-05-03', '2019-05-30')
    .then(data => Object.values(data.bpi))
    .then(vals => calcVolatility(vals))
  
  return (
    <Card>
      <Card.Header>Historical Price Volatility</Card.Header>
      <Card.Body>
        <Card.Text>7 Day: </Card.Text>
        <Card.Text>30 Day: </Card.Text>
        <Card.Text>TYD: </Card.Text>
        <Card.Text>Past Year: </Card.Text>
        <Card.Text>All Time: </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default VolatilityIndex;