import React from "react";
import { orderService } from "../services/communicationService";

const ItemComponent = props => {
  const itemClickHandler = () => {
    orderService.sendOrder({
      id: props.id,
      name: props.title,
      quantity: 1,
      price: props.price,
      total: props.price
    });
  };

  return (
    <button
      type="button"
      className="btn btn-info btn-block"
      onClick={itemClickHandler}
    >
      {props.title}
    </button>
  );
};

export default ItemComponent;
