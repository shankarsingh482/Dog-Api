import React, { Component } from 'react'
import logo from "../images/logo.svg";
import "../App.css";

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

class Dog extends Component {
  render() {
      
    const { fetching, dog, error } = this.props;

    return (
      <div>
         <header className="App-header">
          <img src={dog || logo} className="App-logo" alt="logo" />
          <p> { this.props.count } </p>
        </header>

        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={this.props.actions.apiCallRequest}>Request a Dog</button>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}

      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
      fetching: state.fetching,
      dog: state.dog,
      error: state.error,
      count: state.count,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(actions,dispatch),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Dog);
