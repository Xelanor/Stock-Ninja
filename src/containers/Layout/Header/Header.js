import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};

  render() {
    return (
      <div className="flex justify-center font-bold text-3xl text-stock3 mb-2">
        StockNinja
      </div>
    );
  }
}

export default Header;
