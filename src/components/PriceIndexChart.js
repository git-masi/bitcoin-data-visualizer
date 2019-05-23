import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

  
class PriceIndexChart extends Component {
  state = {
    labels: [],
    data: [],
  }
  
  async getPriceIndexData() {
    const response = await fetch('https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-05-01&end=2019-05-23');
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

  setColorGradient = (canvas) => {
    const width = canvas.width;
    const height = canvas.height;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, 'rgba(254, 202, 87, .6)');
    gradient.addColorStop(1, 'rgba(255, 107, 107, 1)');
    return gradient;
  } 

  makeChart = canvas => {
    const chartData = {
      labels: this.state.labels,
      datasets: [
        {
          label: 'bitcoin price',
          data: this.state.data,
          backgroundColor: this.setColorGradient(canvas),
          pointHoverBackgroundColor: 'rgba(254, 202, 87, 1)',
          borderColor: 'rgba(10, 189, 227, .8)',
          borderWidth: 5,
          borderJoinStyle: 'round',
          lineTension: .2,
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