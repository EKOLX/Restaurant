import React from "react";

const ItemComponent = props => {
  return (
    <button type="button" className="btn btn-primary btn-block">
      {props.title}
    </button>
  );
};

export default ItemComponent;
