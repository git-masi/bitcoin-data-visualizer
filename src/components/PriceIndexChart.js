import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
// import StyledSpinner from './StyledSpinner';
import Card from 'react-bootstrap/Card';
// import styles from './PriceIndexChart.module.css';
// import 'chartjs-plugin-downsample';
import { defaults } from 'react-chartjs-2';

// Disable animating charts by default.
defaults.global.animation = false;

class PriceIndexChart extends Component {

  setColorGradient = (canvas) => {
    const height = canvas.clientHeight;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createLinearGradient(0, height, 0, 0);
    gradient.addColorStop(0, 'rgba(231, 76, 60, .7)');
    gradient.addColorStop(.34, 'rgba(231, 76, 60, .7)');
    gradient.addColorStop(.34, 'rgba(241, 196, 15, .7)');
    gradient.addColorStop(.62, 'rgba(241, 196, 15, .7)');
    gradient.addColorStop(.62, 'rgba(46, 204, 113, .7)');
    gradient.addColorStop(1, 'rgba(46, 204, 113, .7)');

    return gradient;
  }

  makeChart = canvas => {
    const chartData = {
      labels: this.props.labels,
      datasets: [
        {
          label: 'bitcoin price',
          data: this.props.data,
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
                legend: false,
                scales: {
                  xAxes: [{
                    display: true,
                    scaleLabel: {
                      display: true,
                      labelString: 'Date',
                    }
                  }],
                  yAxes: [{
                    display: true,
                    scaleLabel: {
                      display: true,
                      labelString: `Price (${this.props.currency})`,
                    }
                  }]
                }
              }}
              data={this.makeChart}
            />
        </Card.Body>
      </Card>
    )
  }
}

export default PriceIndexChart;