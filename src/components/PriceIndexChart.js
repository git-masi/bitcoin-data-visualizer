import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import Card from 'react-bootstrap/Card';
// import chroma from 'chroma-js';

  
class PriceIndexChart extends Component {
  state = {
    labels: [],
    data: [],
  }
  
  async getPriceIndexData() {
    const response = await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${this.props.currency}&start=${this.props.start}&end=${this.props.end}`,{
      signal: this.controller.signal
    });
    let data = await response.json();
    return data;
  }

  // not sure what this does but it gets rid of the error
  // throws a DOMException though
  // I should ask about this
  controller = new AbortController();

  componentDidMount() {
    this.getPriceIndexData()
      .then(d => this.setState({
        labels: Object.keys(d.bpi),
        data: Object.values(d.bpi)     
      }))
      .catch(err => console.log(err))
  }

  componentWillUnmount(){
    this.controller.abort();
  }

  // getColorStopColors = () => {
  //   const colors = ['rgba(231, 76, 60, 1)', 'rgba(241, 196, 15, 1)', 'rgba(46, 204, 113, 1)'];
  //   const numArr = [...this.state.data];
  //   const sortArr = [...numArr].sort((a,b) => a - b);
  //   const breakPoint = Math.floor(numArr.length / 3);
  //   const firstThird = sortArr[breakPoint];
  //   const secondThird = sortArr[breakPoint * 2];
  //   const max = Math.max(...numArr);

  //   let output = [];
    
  //   for (let n of numArr) {
  //     switch (true) {
  //       case n <= firstThird:
  //         output.push(this.getRGBA(n, firstThird, colors[0]));
  //         break;
  //       case n <= secondThird:
  //         output.push(this.getRGBA(n, secondThird, colors[1]));
  //         break;
  //       case n > secondThird:
  //         output.push(this.getRGBA(n, max, colors[2]));
  //         break;
  //       default:
  //         console.log('something went wrong');
  //         break;
  //     }
  //   }
  //   return output;
  // }

  // getRGBA = (num, max, clr) => {
  //   return `rgba(${chroma(clr).alpha(num / max)._rgb.join(', ')})`;
  // }

  // getColorStopStops = () => {
  //   const length = this.state.data.length;
  //   let output = [];
  //   for (let i in this.state.data) {
  //     output.push(i / length);
  //   };
  //   return output;
  // }

  setColorGradient = (canvas) => {
    const height = canvas.clientHeight;
    // const width = canvas.clientWidth;
    const ctx = canvas.getContext('2d');
    console.log(ctx);
    console.log(height);
    console.log(ctx.canvas.clientHeight);

    const gradient = ctx.createLinearGradient(0, height, 0, 0);
    gradient.addColorStop(0, 'rgba(231, 76, 60, .7)');
    gradient.addColorStop(.34, 'rgba(231, 76, 60, .7)');
    gradient.addColorStop(.34, 'rgba(241, 196, 15, .7)');
    gradient.addColorStop(.62, 'rgba(241, 196, 15, .7)');
    gradient.addColorStop(.62, 'rgba(46, 204, 113, .7)');
    gradient.addColorStop(1, 'rgba(46, 204, 113, .7)');

    // const gradient = ctx.createLinearGradient(0, 0, width, 0);
    // const grdntStops = this.getColorStopStops();
    // const grdntColors = this.getColorStopColors();
    // for (let i = 0; i < this.state.data.length; i++) {
    //   gradient.addColorStop(grdntStops[i], grdntColors[i]);
    // }

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
          borderColor: 'rgba(52, 73, 94, 1.0)',
          borderWidth: 2,
          borderJoinStyle: 'round',
          lineTension: .2,
        },
      ]
    }
    return chartData;
  }

  render() {
    return (
      <Card>
        <Card.Header>Historical Bitcoin Price Data</Card.Header>
        <Card.Body style={{position: 'relative'}}>  
          <Line 
            options={{
              responsive: true,
            }}
            data={this.makeChart}
          />
        </Card.Body>
      </Card>
    )
  }
}

export default PriceIndexChart;