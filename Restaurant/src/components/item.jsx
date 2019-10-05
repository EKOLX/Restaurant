import React from "react";
import Radium from "radium";

const ItemComponent = props => {
  const itemClickHandler = () => {
    alert(`I will pass the ID ${props.id} to Order component!`);
  };

  const style = {
    ":active": {
      backgroundColor: "#065270",
      color: "#ffffff"
    }
  };

  return (
    <button
      type="button"
      className="btn btn-info btn-block"
      style={style}
      onClick={itemClickHandler}
    >
      {props.title}
    </button>
  );
};

export default Radium(ItemComponent);
