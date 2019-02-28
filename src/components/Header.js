import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="bg-primary color-white">
          <div className="logo item">
            <img src={logo} alt="l'oeil du bouquetin" />
          </div>
          <div className="item">
            <Link to="/" className="color-white">
              <h1 className="brand">L'oeil du bouquetin</h1>
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
