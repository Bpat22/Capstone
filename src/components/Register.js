import React, { Component } from "react";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      isRegister: false,
    };
  }
  login() {
    console.warn("state", this.state);
    fetch("http://localhost:8080/authenticate/createUser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp.success.token);
        localStorage.setItem("auth", JSON.stringify(resp.success.token));
      });
    });
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholer="First Name"
            onChange={(e) => {
              this.setState({ username: e.target.value });
            }}
          />
          <br />
          <br />
          <input
            type="text"
            className="form-control"
            placeholer="Last Name"
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
          />
          <br />
          <br />
          <input
            type="text"
            onChange={(e) => {
              this.setState({ active: e.target.value });
            }}
          />
          <br />
          <br />
          <input
            type="text"
            onChange={(e) => {
              this.setState({ role: e.target.value });
            }}
          />
          <br />
          <br />

          <button onClick={() => this.isRegister()}> Register</button>
        </div>
      </form>
    );
  }
}

export default Register;
