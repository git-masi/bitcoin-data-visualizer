import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
// import StyledSpinner from './StyledSpinner';
import Card from 'react-bootstrap/Card';
// import styles from './PriceIndexChart.module.css';
import 'chartjs-plugin-downsample';

class PriceIndexChart extends Component {
  state = {
    labels: [],
    data: [],
    isLoaded: false,
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
        data: Object.values(d.bpi),
        isLoaded: true,
      }))
      .catch(err => console.log(err))
  }

  componentWillUnmount(){
    this.controller.abort();
  }

  setColorGradient = (canvas) => {
    const height = canvas.clientHeight;
    // const width = canvas.clientWidth;
    const ctx = canvas.getContext('2d');
    // console.log(ctx);
    // console.log(height);
    // console.log(ctx.canvas.clientHeight);

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
    // Can't conditinally render or else the chart colors get messed up, not sure why
    // const chartArea = this.state.isLoaded ?
    //   <Line 
    //     options={{
    //       responsive: true,
    //     }}
    //     data={this.makeChart}
    //   /> :
    //   <StyledSpinner />

    return (
      <Card>
        <Card.Header>Historical Bitcoin Price Data</Card.Header>
        <Card.Body style={{position: 'relative'}}>  
          {/* { chartArea } */}
          {/* <div className={this.state.isLoaded ? '' : styles.hide}> */}
            <Line 
              options={{
                responsive: true,
                downsample: {
                  enabled: true,
                  threshold: 50, // change this
       
                  auto: false, // don't re-downsample the data every move
                  onInit: true, // but do resample it when we init the chart (this is default)
       
                  preferOriginalData: true, // use our original data when downscaling so we can downscale less, if we need to.
                  restoreOriginalData: false, // if auto is false and this is true, original data will be restored on pan/zoom - that isn't what we want.
                }
              }}
              data={this.makeChart}
            />
          {/* </div> */}
          {/* <div className={this.state.isLoaded ? styles.hide : ''}> */}
            {/* <StyledSpinner /> */}
          {/* </div> */}
        </Card.Body>
      </Card>
    )
  }
}

export default PriceIndexChart;