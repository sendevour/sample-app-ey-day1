import React, { PureComponent } from 'react';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  clickHandler = (args) => {
    this.setState((state, props) => {
      if (state.count === 4) {
        //  Error boundary will catch it
        throw new Error('Crashed!');
      }

      return {
        count: ++state.count,
      };
    });
  };

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
