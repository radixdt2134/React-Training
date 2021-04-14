import React, { Component } from "react";

class Timer extends Component {
    
  render() {
    return (
        <h2>Timer : {new Date().toLocaleTimeString()}</h2>
    );
  }
}

export default Timer;
