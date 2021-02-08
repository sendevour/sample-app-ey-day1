import React, { Component } from 'react';
import App from './App';

class Parent extends Component {
  render() {
    console.log('Parent: render');
    return <App />;
  }
}

export default Parent;
