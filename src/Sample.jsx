import React, { Component } from 'react';

class Sample extends Component {
  componentDidUpdate() {
    console.log('Sample: componentDidUpdate');
  }

  render() {
    console.log('Sample: render');
    return (
      <>
        <h3>Sample: {this.props.index}</h3>
      </>
    );
  }
}

export default Sample;
