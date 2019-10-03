import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default class OrderComponent extends Component {
  state = {
    orders: [
      { name: "Hamburgers", quantity: 2, price: 1.5, total: 3 },
      { name: "Pizza", quantity: 1, price: 10, total: 10 }
    ],
    note: ""
  };

  updateNoteText = event => {
    this.setState({ note: event.target.value });
  };

  render() {
    return (
      <div>
        <h5>Order № 000167</h5>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th colSpan="2">Name</th>
                <th>Qty.</th>
                <th>Each</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faTimesCircle} />
                </td>
                <td>Hamburgers</td>
                <td>2</td>
                <td>1.50$</td>
                <td>3.00$</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faTimesCircle} />
                </td>
                <td>Pizza</td>
                <td>1</td>
                <td>10.00$</td>
                <td>10.00$</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>Total 100$</div>
        <div>
          <span>Special note</span>
          <input
            type="text"
            onChange={this.updateNoteText}
            value={this.state.note}
          />
          <span>{this.state.note ? this.state.note : "note empty"}</span>
        </div>
        <div>
          <button className="btn btn-danger">Clear</button>
          <button className="btn btn-success">Send</button>
        </div>
        <hr />
      </div>
    );
  }
}
