import React, { Component } from "react";
import DeskComponent from "../desk";

class MenuComponent extends Component {
  state = {
    foodItems: [
      { id: 1, title: "Hamburgers" },
      { id: 2, title: "Pizza" },
      { id: 3, title: "Salads" },
      { id: 4, title: "Appetizers" },
      { id: 5, title: "Pasta" },
      { id: 6, title: "Kəbab" },
      { id: 7, title: "BBQ" },
      { id: 8, title: "Empty" },
      { id: 9, title: "Empty" }
    ],
    drinksItems: [
      { id: 1, title: "Beer" },
      { id: 2, title: "Empty" },
      { id: 3, title: "Empty" }
    ],
    dessertItems: [
      { id: 1, title: "Ice Cream" },
      { id: 2, title: "Pie" },
      { id: 3, title: "Empty" }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <ul id="tabsMenu" className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a
              id="foodTab"
              className="nav-link active"
              data-toggle="tab"
              href="#food"
              role="tab"
              aria-controls="food"
              aria-selected="true"
            >
              Food
            </a>
          </li>
          <li className="nav-item">
            <a
              id="drinksTab"
              className="nav-link"
              data-toggle="tab"
              href="#drinks"
              role="tab"
              aria-controls="drinks"
              aria-selected="false"
            >
              Drinks
            </a>
          </li>
          <li className="nav-item">
            <a
              id="dessertTab"
              className="nav-link"
              data-toggle="tab"
              href="#dessert"
              role="tab"
              aria-controls="dessert"
              aria-selected="false"
            >
              Dessert
            </a>
          </li>
        </ul>
        <div id="menuContent" className="tab-content">
          <div
            id="food"
            className="tab-pane fade show active"
            role="tabpanel"
            aria-labelledby="foodTab"
          >
            <DeskComponent menuItems={this.state.foodItems} />
          </div>
          <div
            id="drinks"
            className="tab-pane fade"
            role="tabpanel"
            aria-labelledby="drinksTab"
          >
            <DeskComponent menuItems={this.state.drinksItems} />
          </div>
          <div
            id="dessert"
            className="tab-pane fade"
            role="tabpanel"
            aria-labelledby="dessertTab"
          >
            <DeskComponent menuItems={this.state.dessertItems} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MenuComponent;
