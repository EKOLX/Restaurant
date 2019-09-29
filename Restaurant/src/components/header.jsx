import React, { Component } from "react";

export default class HeaderComponent extends Component {
  state = {
    component: "Header"
  };

  logOutHandler = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      this.setState({ component: "Header after log out" });
      alert("You have logged out.");
    }
  };

  render() {
    return (
      <React.Fragment>
        <span>Hey, I'm {this.state.component}!</span>
        <button onClick={this.logOutHandler}>Log out</button>
      </React.Fragment>
    );
  }
}
