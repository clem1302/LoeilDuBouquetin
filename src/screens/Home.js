import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/css/Home.css';
import getName from "../redux/selectors/app/getName";
import {connect} from "react-redux";
import {mapStateToProps} from "../helpers/redux_helpers";

class Home extends Component {
  render() {
  	const {name} = this.props;

    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <p>
            Edit <code>src/Home.js</code> and save to reload.
          </p>
          <a
            className="Home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </a>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps({
	name: getName
}))(Home);
