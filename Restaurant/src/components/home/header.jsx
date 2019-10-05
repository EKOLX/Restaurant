import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlockAlt } from "@fortawesome/free-solid-svg-icons";

export default class HeaderComponent extends Component {
  state = {
    title: "Restaurant",
    userFullName: "Elkhan Mursali",
    currentDateTime: new Date().toLocaleDateString(),
    menuTablesLabel: "Menu"
  };

  menuTablesToggleHandler = () => {
    if (this.state.menuTablesLabel === "Menu")
      this.setState({ menuTablesLabel: "Tables" });
    else this.setState({ menuTablesLabel: "Menu" });
  };

  render() {
    const menuTablesClasses = ["btn", "mr-2"];
    if (this.state.menuTablesLabel === "Menu")
      menuTablesClasses.push("btn-primary");
    else menuTablesClasses.push("btn-warning");

    return (
      <div className="row">
        <div className="col-md-4">
          <img
            src="https://picsum.photos/75"
            alt="avatar"
            className="rounded mr-2"
          />
          <span className="font-weight-bold">{this.state.userFullName}</span>
        </div>
        <div className="col-md-4 p-3">
          <h3 className="text-uppercase font-weight-bold text-center text-success">
            {this.state.title}
          </h3>
        </div>
        <div className="col-md-4 p-3 text-light">
          <button
            className={menuTablesClasses.join(" ")}
            onClick={this.menuTablesToggleHandler}
          >
            {this.state.menuTablesLabel}
          </button>
          <span className="bg-secondary mr-2 p-2">
            {this.state.currentDateTime}
          </span>
          <a href="/" className="btn btn-success" click="onLock()">
            <FontAwesomeIcon icon={faUnlockAlt} />
          </a>
        </div>
      </div>
    );
  }
}
