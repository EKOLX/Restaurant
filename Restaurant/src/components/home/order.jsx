import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faPlusCircle,
  faMinusCircle
} from "@fortawesome/free-solid-svg-icons";
import "./home.css";
import { ordersDataStorage } from "../../services/ordersDataStorage";
import { Order } from "../../models/order.model";

export default class OrderComponent extends Component {
  state = {
    order: new Order(0, [], 0),
    note: ""
  };

  componentDidMount() {
    this.setState({ order: ordersDataStorage.getAll() });

    this.ordersSub = ordersDataStorage.ordersChanged.subscribe(newOrder => {
      this.setState({
        order: newOrder
      });
    });
  }

  componentWillUnmount() {
    this.ordersSub.unsubscribe();
  }

  orderRemoveHandler = id => {
    ordersDataStorage.remove(id);
  };

  orderIncreaseHandler = id => {
    ordersDataStorage.increaseQty(id);
  };

  orderDecreaseHandler = id => {
    ordersDataStorage.decreaseQty(id);
  };

  ordersClearHandler = () => {
    ordersDataStorage.clear();
  };

  ordersSendHandler = () => {
    if (window.confirm("Do you want to send order for preparation?")) {
      ordersDataStorage.updateNote(this.state.note);
      ordersDataStorage.send();
      this.setState({ note: "" });
    }
  };

  updateNoteText = event => {
    this.setState({ note: event.target.value });
  };

  getRemoveIconClass = id => {
    const iconClasses = ["click"];
    const order = this.state.order.details.find(o => o.id === id);
    if (order.quantity === 1) iconClasses.push("hidden");
    return iconClasses.join(" ");
  };

  render() {
    return (
      <div className="p-2">
        <h6>Order № {this.state.order.id}</h6>
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
              {this.state.order.details.map(o => (
                <tr key={o.id}>
                  <td>
                    <FontAwesomeIcon
                      icon={faTimesCircle}
                      className="click"
                      onClick={() => this.orderRemoveHandler(o.id)}
                    />
                  </td>
                  <td>{o.name}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faPlusCircle}
                      className="click"
                      onClick={() => this.orderIncreaseHandler(o.id)}
                    />
                    &nbsp;{o.quantity}&nbsp;
                    <FontAwesomeIcon
                      icon={faMinusCircle}
                      className={this.getRemoveIconClass(o.id)}
                      onClick={() => this.orderDecreaseHandler(o.id)}
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
          Total {this.state.order.totalAmount}$
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
