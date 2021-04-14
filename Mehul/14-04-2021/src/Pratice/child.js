import React from "react";
import { Component } from "react";
const { FaIcon, FaStack } = require('react-fa-icon');

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      mobile: "",
      department: "",
    };
  }

  AddEmployee = (event) => {
    const emp = {
      fname: this.state.fname,
      mobile: this.state.mobile,
      department: this.state.department,
    };
    this.props.AddEmployee(emp);
    event.preventDefault();
  };

  handlechange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <fieldset>
        <legend>Register Page</legend>
        <div class="container">
          <form onSubmit={this.AddEmployee}>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    onChange={this.handlechange}
                    name="fname"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label>Mobile</label>              
                  <input
                    type="Number"
                    onChange={this.handlechange}
                    name="mobile"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label>Department</label>
                  <input
                    type="text"
                    onChange={this.handlechange}
                    name="department"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="text-center">
              <input type="submit" class="btn btn-primary"></input>&nbsp;
              <input type="reset" class="btn btn-info"></input>
            </div>
          </form>
        </div>
      </fieldset>
    );
  }
}

export default Child;
