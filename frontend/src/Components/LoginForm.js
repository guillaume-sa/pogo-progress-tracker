import React, { Component } from 'react';
import {login, loggedIn} from '../actions/auth'
import { Redirect } from 'react-router-dom';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    redirectToReferrer: false
  };

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
        [name]: value
    });
  }

  handleSubmit(event) {
    let currentComponent = this;

    event.preventDefault();
    login(this.state.username, this.state.password)
    .then(function () {
      if(loggedIn()){
        currentComponent.setState({ redirectToReferrer: true });
      }
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className="container">
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label>Username</label>
            <input
            type="text"
            name="username"
            className="form-control"
            onChange={this.handleChange.bind(this)} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
            type="password"
            name="password"
            className="form-control"
            onChange={this.handleChange.bind(this)} />
          </div>
          <input type="submit" value="Login" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
