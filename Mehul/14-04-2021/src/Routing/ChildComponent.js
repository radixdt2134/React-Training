import React from "react";

var errors = {};

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: { username: "", password: "" },
      empName: "",
      empContect: "",
      empdepartment: "",
      empemail: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate = () => {
    const errors = {};

    if (this.state.empName === "")
      errors.empName = "Employee name is required!";

    if (this.state.empContect === "")
      errors.empContect = "Employee contect number is required!";

    if (this.state.empdepartment === "")
      errors.empdepartment = "Employee department is required!";

    if (this.state.empemail === "")
      errors.empdepartment = "Employee Email is required!";
    // console.log(this.state)

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleChange(event) {
    // const errors = { ...this.state.errors };
    // const data = { ...this.state.data };
    //   this.setState({value: event.target.value});
    // console.log(event.target.name)
    // this.setState({
    //     username: event.target.username,
    //     password: event.target.password
    //  });
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);

    event.preventDefault();

    const errors = this.validate();

    // this.state({errors});

    if (errors == null) {
      console.log("Submitted");
      this.props.onQuantityChange(this.state);
      return;
    } else {
      console.log(errors);
    }
  }

  render() {
    return (
      <div class="container">
        <h3>Employee Form</h3>
        <form onSubmit={this.handleSubmit}>
          {/* <label>
                    Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label> */}
          {/* <label>Employee Name :</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
                    <br></br>
                    <label>Contect No. :</label>
                    <input type="text" name="monumber" value={this.state.monumber} onChange={this.handleChange}></input>
                    <br></br>
                    <input type="submit" value="Submit" /> */}
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label>Employee Name :</label>
                <input
                  type="text"
                  name="empName"
                  value={this.state.empName}
                  class="form-control"
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label>Contect No. :</label>
                <input
                  type="text"
                  name="empContect"
                  value={this.state.empContect}
                  class="form-control"
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>


            <div class="col-sm-6">
              <div class="form-group">
                <label>Department :</label>
                <input
                  type="text"
                  name="empdepartment"
                  value={this.state.empdepartment}
                  class="form-control"
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>


            <div class="col-sm-6">
              <div class="form-group">
                <label>Email:</label>
                <input
                  type="text"
                  name="empemail"
                  value={this.state.empemail}
                  class="form-control"
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>


          </div>
          <div class="text-center">
            <input type="submit" class="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default ChildComponent;
