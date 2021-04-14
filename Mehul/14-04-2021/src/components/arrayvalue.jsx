import React, { Component } from "react";

class Arrayvalue extends Component {
  render() {
    return (
      <div class="row">
        <div class="cols-6">
          EmployeeName:<input type="text" value={this.props.empname} readonly></input>
        </div>
        <div class="cols-6">
          EmployeeMobile: <input type="text" value={this.props.mobile} readonly></input>
        </div>
      </div>
    );
  }
}
export default Arrayvalue;
