import React, { Component } from 'react';
import App from './App';
import ErrorBoundary from './ErrorBoundary';

class Parent extends Component {
  render() {
    console.log('Parent: render');
    return (
      <>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </>
    );
  }
}

export default Parent;
