import React, { Component } from 'react';   
class Hook extends Component {
    state = {  }
    constructor() {
        super();
        console.log("constructor part Call");
    };

    componentDidMount(){
        console.log("componentDidMount Part Call");
    }

    render() { 
        console.log("render-part call");
        return (<div>0</div>            
          );
    }
}
 
export default Hook;