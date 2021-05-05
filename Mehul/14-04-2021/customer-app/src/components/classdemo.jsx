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

  render() {
    const value = this.state.todos.map((data) => {
      <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.gender}</td>
        <td>{data.status}</td>
      </tr>
    });
    return (
      <div>
        <table>{value}</table>
      </div>
    );
  }
}

export default ClassDemo;
