import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router,Redirect } from "react-router-dom";
import Header from "./components/header";
import Content from "./components/content";
import footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Navbar } from "react-bootstrap";
import Footer from "./components/footer";
class App extends Component {
  render() {
    return (
      <div className="content">
         <Header />
        <Router>         
          <Switch>
            <Content />
          </Switch>        
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
