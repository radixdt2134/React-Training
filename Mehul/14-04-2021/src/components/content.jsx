import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import Menu from "./menu";
import Even from "./even";
import Array from "./arrayvalue";
import Home from "../Routing/home";
import Aboutus from "../Routing/aboutus";
import Contactus from "../Routing/contact";
import Product from "../Routing/product";
import ContactDetails from "../Routing/contactdetails";
import Posts from "../Routing/post";
import NotFound from "../Routing/notFound";
import Parent from "../Routing/ParentComponent";

class Content extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-2 Menubar">
          <Menu />
        </div>
        <div class="col-10 Content">
          <div class="row">
            <div class="col-4 login">
              <Even />
            </div>
            <div class="col-8 Array">
              {/* <h1> Array Value</h1> */}
              {/* <Array empname="MehuPatel" mobile="9428997291"></Array>               */}

              {/* <Route path="/notfound" Component={NotFound} /> */}
              <Route exact path="/" component={Home} />
              <Route path="/aboutus" component={Aboutus} />
              <Route path="/post/:year?/:month?" component={Posts} />
              <Route path="/contact/:id" component={ContactDetails} />
              <Route
                path="/contact"
                render={(props) => <Contactus sortBy="newst" {...props} />}
              />

              <Route path="/product" component={Product} />
              <Route path="/parent" component={Parent} />
              {/* <Redirect from="/message" to="/"></Redirect> */}
              {/* <Redirect to="/notfound" /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
