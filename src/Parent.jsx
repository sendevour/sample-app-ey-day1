import React, { Component } from 'react';

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      validationErrors: {
        username: null,
        password: null,
      },
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    if (this.isFormValid()) {
      const formData = {
        username: this.state.username,
        password: this.state.password,
      };
      console.log('Submitted', formData);
    } else {
      alert('Invalid form');
    }
  };

  isFormValid = () => {
    return !(
      this.state.validationErrors.username ||
      this.state.validationErrors.password
    );
  };

  changeHandler = (e) => {
    switch (e.target.name) {
      case 'username':
        this.updateUsername(e.target.value);
        return;
      case 'password':
        this.updatePassword(e.target.value);
        return;
      default:
        return;
    }
  };

  updateUsername = (username) => {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(username)) {
      this.setState({ username });
      this.setState({
        validationErrors: {
          username: null,
        },
      });
    } else {
      this.setState({
        validationErrors: {
          username: 'Not a valid email',
        },
      });
    }
  };

  updatePassword = (password) => {
    this.setState({ password });
  };

  render() {
    return (
      <>
        <div className='container p-3'>
          <h2>Login Form</h2>
          <hr />

          <form noValidate autoComplete='off' onSubmit={this.submitHandler}>
            <div className='form-group'>
              <label>Username</label>
              <input
                type='text'
                className='form-control'
                onChange={this.changeHandler}
                name='username'
              />
              {this.state.validationErrors.username ? (
                <small className='text-danger'>
                  {this.state.validationErrors.username}
                </small>
              ) : null}
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input
                type='password'
                className='form-control'
                onChange={this.changeHandler}
                name='password'
              />
            </div>
            <button className='btn btn-primary'>Login</button>
          </form>
        </div>
      </>
    );
  }
}

export default Parent;
