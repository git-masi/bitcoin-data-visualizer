import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import chroma from 'chroma-js';

  
class PriceIndexChart extends Component {
  state = {
    labels: [],
    data: [],
  }
  
  async getPriceIndexData() {
    const response = await fetch('https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-05-11&end=2019-05-23');
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


  getColorStopColors = () => {
    const colors = ['rgba(231, 76, 60, 1)', 'rgba(241, 196, 15, 1)', 'rgba(46, 204, 113, 1)'];
    const numArr = [...this.state.data];
    const sortArr = [...numArr].sort((a,b) => a - b);
    const breakPoint = Math.floor(numArr.length / 3);
    const firstThird = sortArr[breakPoint];
    const secondThird = sortArr[breakPoint * 2];
    const max = Math.max(...numArr);

    let output = [];
    
    for (let n of numArr) {
      switch (true) {
        case n <= firstThird:
          output.push(this.getRGBA(n, firstThird, colors[0]));
          break;
        case n <= secondThird:
          output.push(this.getRGBA(n, secondThird, colors[1]));
          break;
        case n > secondThird:
          output.push(this.getRGBA(n, max, colors[2]));
          break;
        default:
          console.log('something went wrong');
          break;
      }
    }
    return output;
  }

  getRGBA = (num, max, clr) => {
    return `rgba(${chroma(clr).alpha(num / max)._rgb.join(', ')})`;
  }

  getColorStopStops = () => {
    const length = this.state.data.length;
    let output = [];
    for (let i in this.state.data) {
      output.push(i / length);
    };
    return output;
  }

  setColorGradient = (canvas) => {
    const width = canvas.clientWidth;
    const ctx = canvas.getContext('2d');
    console.log(ctx);
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    const grdntStops = this.getColorStopStops();
    const grdntColors = this.getColorStopColors();
    for (let i = 0; i < this.state.data.length; i++) {
      gradient.addColorStop(grdntStops[i], grdntColors[i]);
    }
    // console.log(grdntStops, grdntColors);
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