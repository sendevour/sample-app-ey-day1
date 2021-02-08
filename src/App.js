import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  clickHandler = (args) => {
    this.setState((state, props) => {
      return {
        count: ++state.count,
      };
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);

    if (nextState.count % 2 === 0) {
      return true;
    }

    return false;
  }

  render() {
    console.log('App: Render');
    return (
      <>
        <h3>Counter: {this.state.count}</h3>
        <button onClick={this.clickHandler}>Increment</button>
      </>
    );
  }
}

export default App;
