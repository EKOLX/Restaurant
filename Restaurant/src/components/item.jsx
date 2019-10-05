import React from "react";

const ItemComponent = props => {
  const itemClickHandler = () => {
    alert(`I will pass the ID ${props.id} to Order component!`);
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
