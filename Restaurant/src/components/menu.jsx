import React, { useState } from "react";

const MenuComponent = props => {
  const [textState] = useState({
    text: "Hey, I'm"
  });

  const [orderState, orderSetState] = useState({
    order: 0
  });

  const makeOrderHandler = () => {
    orderSetState({ order: orderState.order + 1 });
  };

  return (
    <React.Fragment>
      <span>
        {textState.text} {props.name}!
      </span>
      <span className="badge badge-info">{orderState.order}</span>
      <button className="btn btn-success" onClick={makeOrderHandler}>
        Make order
      </button>
    </React.Fragment>
  );
};

export default MenuComponent;
