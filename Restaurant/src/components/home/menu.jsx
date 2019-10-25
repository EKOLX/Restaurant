import React, { Component } from "react";
import withClass from "../../hoc/withClass";
import DeskComponent from "../Desk";

class MenuComponent extends Component {
  state = {
    foodItems: [
      { id: 1, title: "Hamburger", price: 1.5 },
      { id: 2, title: "Pizza", price: 10 },
      { id: 3, title: "Salad", price: 3.5 },
      { id: 4, title: "Appetizer", price: 5 },
      { id: 5, title: "Pasta", price: 15 },
      { id: 6, title: "Kəbab", price: 20 },
      { id: 7, title: "BBQ", price: 17 }
    ],
    drinksItems: [
      { id: 21, title: "Water", price: 1 },
      { id: 22, title: "Juice", price: 2.5 },
      { id: 23, title: "Tea", price: 1.5 },
      { id: 24, title: "Wine", price: 9 }
    ],
    dessertItems: [
      { id: 41, title: "Ice Cream", price: 2.5 },
      { id: 42, title: "Pie", price: 5 },
      { id: 43, title: "Tiramisu", price: 6.5 }
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

export default withClass(MenuComponent, "someClassName");
