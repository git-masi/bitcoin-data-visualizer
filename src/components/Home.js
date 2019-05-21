import React, { Component } from 'react';
import Navigation from './Navigation';
  
class Home extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <h1>this is the home page</h1>
      </div>
    )
  }
}

export default Home;