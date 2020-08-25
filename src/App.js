import React from "react";
import Inventory from "./components/Inventory";
import Checkout from "./components/Checkout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Inventory />
      <Checkout />
    </div>
  );
}

export default App;
