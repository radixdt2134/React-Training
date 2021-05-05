import React, { Component } from "react";

class Login extends Component {
  state = {
    account: { username: "", password: "" },
  };

  //validation
  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "username is required";
    if (account.password.trim() === "")
      errors.password = "password is  required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handlesubmit = (e) => {
    e.preventDefault();

    const error = this.validate();
    console.log(error);
    this.setState({ error });
    if (error) return;

    console.log("Submiteed");
  };

  handlechange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <h1>Login</h1>
          <form onSubmit={this.handlesubmit}>
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  value={account.username}
                  onChange={this.handlechange}
                  name="username"
                  id="username"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  value={account.password}
                  onChange={this.handlechange}
                  name="password"
                  type="password"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
