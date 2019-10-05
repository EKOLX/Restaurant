import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faPlusCircle,
  faMinusCircle
} from "@fortawesome/free-solid-svg-icons";
import "./home.css";

export default class OrderComponent extends Component {
  state = {
    orders: [
      { id: 1, name: "Hamburgers", quantity: 2, price: 1.5, total: 3 },
      { id: 2, name: "Pizza", quantity: 1, price: 10, total: 10 },
      { id: 3, name: "Salad", quantity: 1, price: 15.5, total: 15.5 }
    ],
    note: ""
  };

  onDeleteHandler = id => {
    const orders = [...this.state.orders];
    const index = orders.findIndex(o => o.id === id);
    orders.splice(index, 1);
    this.setState({ orders });
  };

  onAddHandler = id => {
    const orders = [...this.state.orders];
    orders.find(o => o.id === id).quantity++;
    this.setState({ orders });
  };

  onRemoveHandler = id => {
    let orders = [...this.state.orders];
    const order = orders.find(o => o.id === id);
    if (order.quantity > 1) order.quantity--;

    this.setState({ orders });
  };

  updateNoteText = event => {
    this.setState({ note: event.target.value });
  };

  getRemoveIconClass = id => {
    const iconClasses = ["click"];
    const order = this.state.orders.find(o => o.id === id);
    if (order.quantity === 1) iconClasses.push("hidden");
    return iconClasses.join(" ");
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
                <tr key={o.id}>
                  <td>
                    <FontAwesomeIcon
                      icon={faTimesCircle}
                      className="click"
                      onClick={() => this.onDeleteHandler(o.id)}
                    />
                  </td>
                  <td>{o.name}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faPlusCircle}
                      className="click"
                      onClick={() => this.onAddHandler(o.id)}
                    />
                    &nbsp;{o.quantity}&nbsp;
                    <FontAwesomeIcon
                      icon={faMinusCircle}
                      className={this.getRemoveIconClass(o.id)}
                      onClick={() => this.onRemoveHandler(o.id)}
                    />
                  </td>
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
