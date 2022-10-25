import React from "react";
import Header from "./Header/Header";
import { Filter } from "./Filter/Filter";
import ProductsList from "./ProductsList/ProductsList";
import { GlobalStyle } from "../index.styled";

const containerStyles = {
  display: "flex",
  justifyContent: "center",
};

const App = () => {
  return (
    <>
      
      <div>
        <Header />
        <div style={containerStyles}>
          <Filter />
          <ProductsList />
        </div>
      </div>
    </>
  );
};

export default App;
