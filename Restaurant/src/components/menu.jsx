import React, { Component } from "react";

class MenuComponent extends Component {
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
            Foooooood
          </div>
          <div
            id="drinks"
            className="tab-pane fade"
            role="tabpanel"
            aria-labelledby="drinksTab"
          >
            Driiiiiinks
          </div>
          <div
            id="dessert"
            className="tab-pane fade"
            role="tabpanel"
            aria-labelledby="dessertTab"
          >
            Desseeeeeert
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MenuComponent;
