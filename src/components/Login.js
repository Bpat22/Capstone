import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  login() {
    console.warn("state", this.state);
    fetch("http://localhost:8080/authenticate", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((resp) => {
          console.log(resp);
        //console.log(resp.success.token);
        //localStorage.setItem("auth", JSON.stringify(resp.success.token));
      });
    });
  }

  render() {
    return (
      <div>
        <input
          type="text" placeholder = "username"
          onChange={(e) => {
            this.setState({ username: e.target.value });
          }}
        />
        <br />
        <br />
        <input
          type="password" placeholder="password"
          onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
        />
        <br />
        <br />
        <button onClick={() => this.login()}> Login</button>
        <br />
        <br />
        "Not Enrolled?"
        <Link to="/register">Sign Up</Link>
        Now
        <br />
        <br />
      </div>
    );
  }
}

export default Login;
