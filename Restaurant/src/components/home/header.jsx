import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlockAlt } from "@fortawesome/free-solid-svg-icons";

export default class HeaderComponent extends Component {
  state = {
    title: "Restaurant",
    userFullName: "Elkhan Mursali",
    currentDateTime: new Date().toLocaleDateString(),
    menuTablesLabel: "Tables",
    link: "order",
    linkParams: { pathname: "order" }
  };

  menuTablesToggleHandler = () => {
    this.setState((prevState, props) => {
      let newLink = "",
        newMenuTablesLabel = "";
      let newLinkParams = {};

      if (prevState.link === "tables") {
        newLink = "order";
        newLinkParams = {
          pathname: newLink,
          search: "?id=12345",
          hash: "#menu"
        };
        newMenuTablesLabel = "Tables";
      } else {
        newLink = "tables";
        newLinkParams = newLink;
        newMenuTablesLabel = "Menu";
      }

      return {
        menuTablesLabel: newMenuTablesLabel,
        link: newLink,
        linkParams: newLinkParams
      };
    });
  };

  render() {
    const menuTablesClasses = ["btn", "mr-2"];
    if (this.state.link === "order") menuTablesClasses.push("btn-warning");
    else menuTablesClasses.push("btn-primary");

    console.log(this.state, this.state.linkParams);

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
          <Link
            to={this.state.linkParams}
            className={menuTablesClasses.join(" ")}
            onClick={this.menuTablesToggleHandler}
          >
            {this.state.menuTablesLabel}
          </Link>
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
