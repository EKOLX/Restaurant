import React from "react";
import ItemComponent from "./item";

const style = {
  border: "1px solid red"
};

const DeskComponent = props => {
  const itemsPerRow = 4;
  const itemsCount = props.menuItems.length;
  const rowCount = parseInt(itemsCount / itemsPerRow) + 1;
  let itemIndex = 0;
  let desk = [];

  function createRows() {
    const remainderCells = itemsCount % itemsPerRow;

    for (let row = 1; row <= rowCount; row++) {
      let cellCount = 0;
      if (row < rowCount) cellCount = itemsPerRow;
      else cellCount = remainderCells;

      desk.push(
        <div key={row} className="row">
          {createCells(cellCount)}
        </div>
      );
    }
  }

  function createCells(cellCount) {
    let cells = [];
    for (let col = 0; col < cellCount; col++) {
      cells.push(
        <div key={itemIndex} className="col-md-3 mt-2 mb-1">
          <ItemComponent title={props.menuItems[itemIndex].title} />
        </div>
      );
      itemIndex++;
    }
    return cells;
  }

  createRows();

  return <div>{desk}</div>;
};

export default DeskComponent;
