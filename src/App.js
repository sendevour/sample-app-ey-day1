import React, { PureComponent } from 'react';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  clickHandler = (args) => {
    console.log('clickHandler');

    //because the component is pure, same state doesn't cause re-render
    //this does shallow compare
    //this approach is a performance improvement
    //other way is to implement shouldComponentUpdate and return false
    //this approach is favoured in most cases
    this.setState((state, props) => {
      return {
        count: state.count,
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
