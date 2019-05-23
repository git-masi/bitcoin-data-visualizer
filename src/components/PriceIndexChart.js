import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

  
class PriceIndexChart extends Component {
  state = {
    labels: [],
    data: [],
  }
  
  async getPriceIndexData() {
    const response = await fetch('https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-05-17&end=2019-05-23');
    let data = await response.json();
    return data;
  }

  componentDidMount() {
    this.getPriceIndexData()
      .then(d => this.setState({
        labels: Object.keys(d.bpi),
        data: Object.values(d.bpi)     
      }))
      .catch(err => console.log(err))
  }

  makeChart = canvas => {
    const chartData = {
      labels: this.state.labels,
      datasets: [
        {
          label: 'bitcoin price',
          backgroundColor: 'rgba(238, 82, 83,1.0)',
          data: this.state.data,
        },
      ]
    }
    return chartData;
  }

  render() {

    return (
      <div style={{position: 'relative'}}>
        <Line 
          options={{
            responsive: true,
          }}
          data={this.makeChart}
        />
      </div>
    )
  }
}

export default PriceIndexChart;