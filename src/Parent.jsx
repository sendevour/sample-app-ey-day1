import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'user@domain.com',
    };
    this.emailRef = React.createRef();
  }

  submitHandler = () => {
    const val = this.emailRef.current.value;

    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val)) {
      this.setState({ email: val });
    }
  };

  render() {
    return (
      <>
        <div className='container p-3'>
          <h2>Current: {this.state.email}</h2>
          <input type='email' className='form-control' ref={this.emailRef} />
          <button
            className='btn btn-primary btn-sm mt-2'
            onClick={this.submitHandler}
          >
            Submit
          </button>

          <hr />

          <Child email={this.state.email} />
        </div>
      </>
    );
  }
}

export default Parent;
