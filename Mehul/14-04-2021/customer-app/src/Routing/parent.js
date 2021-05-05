import { Component } from "react";
import React from "react";
import Child from "./child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { "Name": "Reena" };
  }

  namechange = (value) => {
      this.setState({ "Name" : value })
  };

  render() {
    return <div>
        <Child name={this.state.Name} onNameChange={this.namechange}></Child>
    </div>;
  }
}

export default Parent;
