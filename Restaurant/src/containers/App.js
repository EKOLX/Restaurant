import React from "react";
import "./App.css";
import HeaderComponent from "../components/home/Header";
import MenuComponent from "../components/home/Menu";
import OrderComponent from "../components/home/Order";

function App() {
  return (
    <main className="app">
      <div className="row header">
        <section className="col-md-12 border border-warning">
          <HeaderComponent />
        </section>
      </div>
      <div className="row content">
        <div className="col-md-7 border border-warning">
          <MenuComponent name="Menu" />
        </div>
        <div className="col-md-5 border border-warning">
          <OrderComponent />
        </div>
      </div>
    </main>
  );
}

export default App;
