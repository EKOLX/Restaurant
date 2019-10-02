import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlockAlt } from "@fortawesome/free-solid-svg-icons";

export default class HeaderComponent extends Component {
  state = {
    title: "Restaurant",
    userFullName: "Elkhan Mursali",
    currentDateTime: "02-10-2019"
  };

  logOutHandler = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      this.setState({ component: "Header after log out" });
      alert("You have logged out.");
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          <img
            src="https://picsum.photos/75"
            alt="avatar"
            className="rounded mr-2"
          />
          <span className="font-weight-bold">{this.state.userFullName}</span>
        </div>
        <div className="col-md-7 p-3">
          <h3 className="text-uppercase font-weight-bold text-center text-success">
            {this.state.title}
          </h3>
        </div>
        <div className="col-md-3 p-3 text-light">
          <span className="bg-info mr-2 p-2">{this.state.currentDateTime}</span>
          <a href="/" className="btn btn-success" click="onLock()">
            <FontAwesomeIcon icon={faUnlockAlt} />
          </a>
        </div>
      </div>
    );
  }
}
