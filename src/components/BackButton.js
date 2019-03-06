import React from "react";
import { Link } from "react-router-dom";

class BackButton extends React.Component {
  render() {
    return (
      <div className="backbutton">
        <Link to="/">&lArr; Précédent</Link>
      </div>
    );
  }
}

export default BackButton;
