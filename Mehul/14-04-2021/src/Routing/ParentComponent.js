import React from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { empName: "", empMoNumber: "" }
    this.state = { employeeData: [] };
  }

  FormInfoChanged = (val) => {
    this.state.employeeData.push(val);
  };

  render() {
    const dataItems = this.state.employeeData.map((data) => {
      return (
        <ul>
          <li>Employee Name : {data.empName}</li>
          <li>Name : {data.empContect}</li>
          <li>Department: {data.empdepartment}</li>
          <li>Email : {data.empemail}</li>
        </ul>
      );
    });

    return (
      <div>
         <p>
          Total Employee Count: <b>{this.state.employeeData.length}</b>
        </p>
        <ChildComponent onQuantityChange={this.FormInfoChanged} />
        <h1>Parent screen</h1>
        <div>{dataItems}</div>      
      </div>
    );
  }
}

export default ParentComponent;
