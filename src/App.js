import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  clickHandler = (args) => {
    console.log('clickHandler');
    this.setState((state, props) => {
      return {
        count: ++state.count,
      };
    });
  };

  static getDerivedStateFromProps(props, state) {
    //use props change to cause state change
    console.log('getDerivedStateFromProps', props, state);
    return {
      count: state.count + 2,
    };
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
