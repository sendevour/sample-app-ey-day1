import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: ['Bengaluru', 'Mysuru', 'Haveri'],
    };
  }

  clickHandler = (args) => {
    console.log(args);
  };

  render() {
    console.log('App: Render');
    return (
      <>
        <ul>
          {this.state.cities.map((c) => {
            return (
              <button key={c} onClick={() => this.clickHandler(c)}>
                Click {c}
              </button>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
