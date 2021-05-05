import React from "react";
import { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
  }

  handlechange = (e) => {
    this.props.onNameChange(e.target.value);
  };

  handlesubmit = (e) => {
      this.props.onNameChange(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.name}
          onChange={this.handlechange}
        ></input>
    
        {this.props.name}
      </div>
    );
  }
}

export default Child;
