import React, { Component } from 'react';
import Sample from './Sample';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((state, props) => {
      return {
        count: state.count + 1,
      };
    });
  };

  componentDidUpdate() {
    console.log('App: componentDidUpdate');
  }

  render() {
    console.log('App: Render');
    return (
      <>
        <Sample index={this.state.count} />

        <button onClick={this.increment}>Increment</button>
      </>
    );
  }
}

export default App;
