import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

  
class PriceIndexChart extends Component {
  state = {
    data: {
      labels: ['1', '2', '3', '4', '5'],
      datasets: [
        {
          label: 'bitcoin mined',
          backgroundColor: 'rgba(238, 82, 83,1.0)',
          data: [3,7,8,3,1,2,3,4],
        },
        {
          label: 'bitcoin sold',
          backgroundColor: 'rgba(16, 172, 132,1.0)',
          data: [1,10,2,7,1,2,6,0],
        }
      ]
    }
  }

  render() {
    return (
      <div style={{position: 'relative', width: '100%'}}>
        <Line 
          options={{
            responsive: true,
          }}
          data={this.state.data}
        />
      </div>
    )
  }
}

export default PriceIndexChart;