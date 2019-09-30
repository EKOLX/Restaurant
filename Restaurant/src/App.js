import React from "react";
import "./App.css";
import HeaderComponent from "./components/header";
import MenuComponent from "./components/menu";
import OrderComponent from "./components/order";

// const style = {
//   backgroundColor: "#2d39eb",
//   color: "white"
// };

function App() {
  return (
    <main className="container-fluid d-flex flex-column h-100">
      <div className="row">
        <section className="col-md-12 border border-primary">
          <HeaderComponent />
        </section>
      </div>
      <div className="row flex-fill">
        <div className="col-md-8 border border-warning">
          <MenuComponent name="Menu" />
        </div>
        <div className="col-md-4 border border-success">
          <OrderComponent />
        </div>
      </div>
    </main>
  );
}

export default App;
