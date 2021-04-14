import React, { Component } from "react";
import Timer from "./timer";
class Header extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-2 logo">
          <img
            src="https://dm8ix2eh2gsglmbyba2271c4-wpengine.netdna-ssl.com/wp-content/themes/radixweb/images/logo_radix.png"
            width="124px"
            height="129px"
            alt="Software Development to Accelerate Growth"
          ></img>
        </div>
        <div class="col-7 Title label label-default">
          <div class="titlecontent">
            Software Development to Accelerate Growth
          </div>
          {/* <NavBar /> */}
        </div>
        <div class="col-3 Timer">
          <Timer />
        </div>
      </div>
    );
  }
}

export default Header;
