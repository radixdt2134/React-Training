import React, { Component } from "react";
import { getemployee, getemployeeByid } from "../services/employeeData";

class EmployeeDetails extends Component {
  state = {
    emp: getemployee(),
  };

  handleevent = (id) => {
    const empvalue = getemployeeByid(id);
    console.log(empvalue);
  };

  render() {
    const { length: count } = this.state.emp;
    if (count === 0) return <p>No Data found</p>;
    return (
      <React.Fragment>
        <div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Department</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.emp.map((empdtl) => (
                <tr key={empdtl._id}>
                  <td>{empdtl._id}</td>
                  <td>{empdtl.empname}</td>
                  <td>{empdtl.empSalary}</td>
                  <td>{empdtl.empdepartment}</td>
                  <td>
                    <button className="btn btn-warning">Delete</button> &nbsp;
                    <button
                      className="btn btn-info"
                      onClick={() => this.handleevent(empdtl._id)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default EmployeeDetails;
