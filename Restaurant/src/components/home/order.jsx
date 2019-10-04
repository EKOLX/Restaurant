import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default class OrderComponent extends Component {
  state = {
    orders: [
      { name: "Hamburgers", quantity: 2, price: 1.5, total: 3 },
      { name: "Pizza", quantity: 1, price: 10, total: 10 },
      { name: "Salad", quantity: 1, price: 15.5, total: 15.5 }
    ],
    note: ""
  };

  updateNoteText = event => {
    this.setState({ note: event.target.value });
  };

  render() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const roundTo2 = value => Math.round(value * 100) / 100;
    const totalAmount = roundTo2(
      this.state.orders.map(o => o.total).reduce(reducer, 0)
    );

    return (
      <div className="p-2">
        <h6>Order № 000167</h6>
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
              {this.state.orders.map(o => (
                <tr>
                  <td>
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </td>
                  <td>{o.name}</td>
                  <td>{o.quantity}</td>
                  <td>{o.price}$</td>
                  <td>{o.total}$</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h5 className="d-block bg-info text-white text-right p-3">
          Total {totalAmount}$
        </h5>
        <div>
          <span>Special note:</span>
          <input
            type="text"
            className="form-control"
            placeholder="without onion, garlic, bread i.e."
            onChange={this.updateNoteText}
            value={this.state.note}
          />
        </div>
        <div className="p-2 text-right">
          <button className="btn btn-danger mr-2">Clear</button>
          <button className="btn btn-success">Send</button>
        </div>
        <hr />
      </div>
    );
  }
}
