import React, { Component } from 'react';

class Child extends Component {
  state = { username: '', domain: '' };

  static getDerivedStateFromProps(props, state) {
    const [newUsername, newDomain] = props.email.split('@');

    return {
      username: newUsername,
      domain: newDomain,
    };
  }

  render() {
    return (
      <>
        <h3>Child Component</h3>
        <p>Username: {this.state.username}</p>
        <p>Domain: {this.state.domain}</p>
      </>
    );
  }
}

export default Child;
