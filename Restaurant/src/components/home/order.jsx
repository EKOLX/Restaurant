import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faPlusCircle,
  faMinusCircle
} from "@fortawesome/free-solid-svg-icons";
import "./home.css";
import { orderService } from "../../services/communicationService";

export default class OrderComponent extends Component {
  state = {
    orders: [],
    note: ""
  };

  //subscription;

  componentDidMount() {
    this.subscription = orderService.getOrder().subscribe(newOrder => {
      const orders = [...this.state.orders];
      const order = orders.find(o => o.id === newOrder.id);
      if (order) {
        const quantity = ++order.quantity;
        order.total = quantity * order.price;
      } else orders.push(newOrder);

      this.setState({ orders });
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  orderDeleteHandler = id => {
    const orders = [...this.state.orders];
    const index = orders.findIndex(o => o.id === id);
    orders.splice(index, 1);
    this.setState({ orders });
  };

  orderAddHandler = id => {
    const orders = [...this.state.orders];
    const order = orders.find(o => o.id === id);
    const quantity = ++order.quantity;
    order.total = quantity * order.price;

    this.setState({ orders });
  };

  orderRemoveHandler = id => {
    let orders = [...this.state.orders];
    const order = orders.find(o => o.id === id);
    if (order.quantity > 1) {
      const quantity = --order.quantity;
      order.total = quantity * order.price;
    }

    this.setState({ orders });
  };

  ordersClearHandler = () => {
    this.setState({ orders: [] });
  };

  ordersSendHandler = () => {
    this.ordersClearHandler();
    alert("Order has been sent for preparation.");
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
                      onClick={() => this.orderDeleteHandler(o.id)}
                    />
                  </td>
                  <td>{o.name}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faPlusCircle}
                      className="click"
                      onClick={() => this.orderAddHandler(o.id)}
                    />
                    &nbsp;{o.quantity}&nbsp;
                    <FontAwesomeIcon
                      icon={faMinusCircle}
                      className={this.getRemoveIconClass(o.id)}
                      onClick={() => this.orderRemoveHandler(o.id)}
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
          <button
            className="btn btn-danger mr-2"
            onClick={this.ordersClearHandler}
          >
            Clear
          </button>
          <button className="btn btn-success" onClick={this.ordersSendHandler}>
            Send
          </button>
        </div>
        <hr />
      </div>
    );
  }
}
