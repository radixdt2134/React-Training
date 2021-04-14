import React, { Component } from "react";
import Child from "./child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { customer: [] };
  }
  Addcutomer = (data) => {
    this.state.customer.push(data);
  };

  render() {
    console.log(this.state.customer);
    const dataitems = this.state.customer.map((cont) => {
      return(
      <tr>
        <td>{cont.fname}</td>
        <td>{cont.mobile}</td>
        <td>{cont.department}</td>
      </tr>
      );
    });
    return (
      <div>
        <label>
          <b>Total Customer Count :</b>
        </label>
        &nbsp;
        <span>
          <b> {this.state.customer.length}</b>
        </span>
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Mobile</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {/* {this.state.customer.map((cont) => {
              return (
                <tr>
                  <td>{cont.fname}</td>
                  <td>{cont.mobile}</td>
                  <td>{cont.department}</td>
                </tr>
              );
            })} */}
            {dataitems}
          </tbody>
        </table>
        <Child AddEmployee={this.Addcutomer}></Child>
      </div>
    );
  }
}
export default Parent;
