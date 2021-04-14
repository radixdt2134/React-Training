import React from "react";

class ClassDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }
  componentDidMount() {
    this.fetchAPI().then((response) => {
      //   console.log(response);
      this.setState({ todos: response.data });
      // console.log(this.state.todos);
    });
  }
  async fetchAPI() {
    return fetch("https://gorest.co.in/public-api/users").then((response) =>
      response.json()
    );
  }
  // changeState = () => {

  // }

  render() {
    const listItems = this.state.todos.map((data) => (
      <div>
        <ul>
          <li>Id : {data.id}</li>
          <li>Name : {data.name}</li>
          <li>Email : {data.email}</li>
          <li>Gender : {data.gender}</li>
          <li>Status : {data.status}</li>
        </ul>
      </div>
    ));

    return (
      <div>
        {listItems}
        {/* ​​​​​<ul>{this.state.todos}</ul>​​ */}
      </div>
    );
  }
}

export default ClassDemo;
