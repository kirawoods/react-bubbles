import React, { Component } from "react";
import { AxiosWithAuth } from "../utils/AxiosWithAuth";

export class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    AxiosWithAuth()
      .post("/login", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/bubbles");
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.login}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log In</button>
        </form>
      </div>
    );
  }
}
