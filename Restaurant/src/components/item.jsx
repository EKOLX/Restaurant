import React from "react";
import { OrderDetail } from "../models/order.model";
import { ordersDataStorage } from "../services/ordersDataStorage";
import "./Item.css";

const itemComponent = props => {
  const itemClickHandler = () => {
    const order = new OrderDetail(
      props.id,
      props.title,
      1,
      props.price,
      props.price
    );
    ordersDataStorage.addOrUpdate(order);
  };

  return (
    <button
      type="button"
      className="btn btn-info btn-block item"
      onClick={itemClickHandler}
    >
      {props.title}
    </button>
  );
};

export default itemComponent;
