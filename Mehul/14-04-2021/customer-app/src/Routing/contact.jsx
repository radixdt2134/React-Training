import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    contacts: [
      { id: 1, name: "Person 1" },
      { id: 2, name: "Person 2" },
      { id: 3, name: "Person 3" }
    ]
  };
  render() {
    return (
      <div>
        <h1>Contact Page</h1>
        <ul>
          {this.state.contacts.map(cont => (
            <li key={cont.id}>
              <Link to={`/contact/${cont.id}`}>{cont.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Contact;
