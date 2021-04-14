import React, { Component } from "react";

class Even extends Component {
  constructor(pros) {
    super(pros);
    this.state = {};
  }
  render() {
    var everow = [];
    for (var i = 0; i <= 100; i++) {
      if (i % 2 === 0) {
        everow.push(
          <tr>
            <td>{i}</td>
          </tr>
        );
      }
    }
    return (
      <div>
        <div class="scrollbar">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Even Number</th>
              </tr>
            </thead>
            <tbody>{everow}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Even;
