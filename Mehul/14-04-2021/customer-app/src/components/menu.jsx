import React, { Component } from "react";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
class Menu extends Component {
  render() {
    return (
      <div class="vertical-menu">
        <Link class="nav-link" to="/">
          Home
        </Link>
        <Link class="nav-link" to="/aboutus">
          About us
        </Link>
        <Link class="nav-link" to="/contact">
          Contact us
        </Link>
        <Link class="nav-link" to="/post">
          Posts
        </Link>
        <Link class="nav-link" to="/product">
          Product
        </Link>
        <Link class="nav-link" to="/parent">
          Parent
        </Link>
      </div>
    );
  }
}
export default Menu;
