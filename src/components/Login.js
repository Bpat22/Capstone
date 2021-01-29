import React, { Component } from "react";

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
        console.log(resp.success.token);
        localStorage.setItem("auth", JSON.stringify(resp.success.token))
      });
    });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={(e) => {
            this.setState({ username: e.target.value });
          }}
        />
        <br /><br />
        <input type="password" onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
        />
        <br /><br />
        <button onClick={() => this.login()}> Login</button>
      </div>
    );
  }
}

export default Login;
