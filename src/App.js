import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./containers/Layout/Header/Header";
import Footer from "./containers/Layout/Footer/Footer";
import Homepage from "./containers/Homepage/Homepage";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="">
          <Header />
          <Route path="/" exact component={Homepage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
