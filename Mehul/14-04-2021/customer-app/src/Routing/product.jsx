import React, { Component } from "react";
class Product extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      productname: "",
      productprice: "",
      productimage: "",
      productdate: "",
      selectedcategory: "",
      iteminfo: "",
      status: "",
      category: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  Validate = () => {
    const errors = {};
    if (this.state.productname === "") {
      errors.productname = "ProductName is required.";
    }
    if (this.state.productprice === "") {
      errors.productprice = "ProductPrice is required.";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handlesubmit = (event) => {
    event.preventDefault();
    const errors = this.Validate();
    if (errors != null) {
      console.log(errors);
    } else {
      var message = "";
      for (var i = 0; i < this.state.category.length; i++) {
        message += this.state.category[i] + " ";
      }
      console.log(message);

      alert(
        "Productname :" +
          this.state.productname +
          "\n" +
          "Productprice :" +
          this.state.productprice +
          "\n" +
          "ProductImage :" +
          this.state.productimage +
          "\n" +
          "Productdate :" +
          this.state.productdate +
          "\n" +
          "Product category :" +
          this.state.selectedcategory +
          "\n" +
          "Product Status :" +
          this.state.status +
          "\n" +
          "Product Item :" +
          this.state.iteminfo
      );
    }
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(target.name);
    if (target.name === "category") {
      this.state.selectedcategory += target.value + ",";
    } else {
      this.setState({ [name]: value });
    }
  }

  render() {
    return (
      <div class="container">
        <form onSubmit={this.handlesubmit}>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label htmlFor="productname">Product Name</label>
                <input
                  name="productname"
                  id="productname"
                  type="text"
                  class="form-control"
                  value={this.state.productname}
                  onChange={this.handleInputChange}
                />              
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label htmlFor="productprice">Product Price</label>
                <input
                  name="productprice"
                  id="productprice"
                  type="Number"
                  class="form-control"
                  value={this.state.productprice}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label htmlFor="productimage">Product Image</label>
                <input
                  name="productimage"
                  id="productimage"
                  type="file"
                  class="form-control"
                  value={this.state.productimage}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label htmlFor="productdate">Order Date</label>
                <input
                  name="productdate"
                  id="productdate"
                  type="date"
                  class="form-control"
                  value={this.state.productdate}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <div class="form-check">
                  <input
                    name="category"
                    type="checkbox"
                    value="category1"
                    id="category1"
                    onChange={this.handleInputChange}
                  />
                  Category 1
                  <input
                    name="category"
                    type="checkbox"
                    value="category2"
                    id="category2"
                    onChange={this.handleInputChange}
                  />
                  Category 2
                  <input
                    name="category"
                    type="checkbox"
                    value="category3"
                    id="category3"
                    onChange={this.handleInputChange}
                  />
                  Category 3
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label htmlFor="itemdata">Item</label>
                <select
                  name="iteminfo"
                  htmlFor="itemdata"
                  class="form-control"
                  value={this.state.iteminfo}
                  onChange={this.handleInputChange}
                >
                  <option value="Item1">Item 1</option>
                  <option value="Item2">Item 2</option>
                  <option value="Item3">Item 3</option>
                  <option value="Item4">Item 4</option>
                </select>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <div class="form-check">
                  <label htmlFor="status">Status :</label>   
                  <input
                    name="status"
                    type="radio"
                    value="Active"
                    onChange={this.handleInputChange}
                  />
                  Active                     
                  <input
                    name="status"
                    type="radio"
                    value="Inactive"
                    onChange={this.handleInputChange}
                  />
                  In Active
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <input type="submit" class="btn btn-primary" /> &nbsp;
            <input type="reset" class="btn btn-info" />
          </div>
        </form>
      </div>
    );
  }
}

export default Product;
