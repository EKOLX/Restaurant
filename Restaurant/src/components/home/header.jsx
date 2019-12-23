import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlockAlt } from "@fortawesome/free-solid-svg-icons";

class HeaderComponent extends Component {
  state = {
    title: "Restaurant",
    userFullName: "Elkhan Mursali",
    currentDateTime: new Date().toLocaleDateString(),
    menuTablesLabel: "Tables",
    linkParams: { pathname: "tables" }
  };

  render() {
    const menuTablesClasses = ["btn", "mr-2"];
    if (this.props.menuTablesLabel === "Tables")
      menuTablesClasses.push("btn-warning");
    else menuTablesClasses.push("btn-primary");

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
            {this.props.title}
          </h3>
        </div>
        <div className="col-md-4 p-3 text-light">
          <Link
            to={this.props.linkParams}
            className={menuTablesClasses.join(" ")}
            onClick={this.props.menuTablesToggleHandler}
          >
            {this.props.menuTablesLabel}
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

const mapStateToProps = state => {
  return {
    title: state.title,
    menuTablesLabel: state.menuTablesLabel,
    linkParams: state.linkParams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    menuTablesToggleHandler: () =>
      dispatch({ type: actionTypes.TOGGLE_MENU_TABLES })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
