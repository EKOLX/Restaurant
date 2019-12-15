import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import "./App.css";
import Aux from "../hoc/Auxiliary";
import HeaderComponent from "../components/home/Header";
import MenuComponent from "../components/home/Menu";
import OrderComponent from "../components/home/Order";

function App() {
  return (
    <BrowserRouter>
      <main className="app">
        <div className="row header">
          <section className="col-md-12 border border-warning">
            <HeaderComponent />
          </section>
        </div>
        <div className="row content">
          <Switch>
            <Route path="/tables" render={() => <h1>Coming soon...</h1>} />
            <Route
              path="/order"
              render={() => (
                <Aux>
                  <div className="col-md-7 border border-warning">
                    <MenuComponent name="Menu" />
                  </div>
                  <div className="col-md-5 border border-warning">
                    <OrderComponent />
                  </div>
                </Aux>
              )}
            />
            <Redirect from="/" to="/order" />
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
