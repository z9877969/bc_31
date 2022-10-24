import React from "react";
import HeaderQwe from "./Header/Header";
import { Filter } from "./Filter/Filter";
import ProductsList from "./ProductsList/ProductsList";

const App = () => {
  return (
    <div>
      <HeaderQwe />
      <Filter />
      <ProductsList />
    </div>
  );
  // React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", { class: "app" }, "App")
  // );
};

export default App;
