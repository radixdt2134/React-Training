import React from "react";
import { Component } from 'react';
class ContactDetails extends Component {
  handlesave = () => {
    //this.props.history.push("/contact"); go back working
    this.props.history.replace("/contact");
  };

  render() {
    return (
      <div>
        <h1> Person Number - {this.props.match.params.id}</h1>
        <button onClick={this.handlesave}>Save</button>
      </div>
    );
  }
}

export default ContactDetails;
