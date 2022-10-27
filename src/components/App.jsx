import React, { Component } from "react";
import Header from "./Header/Header";
import { Filter } from "./Filter/Filter";
import ProductsList from "./ProductsList/ProductsList";
import Cart from "./Cart/Cart";
// import Counter from "./Counter/Counter";

const containerStyles = {
  display: "flex",
  justifyContent: "center",
  padding: "15px",
  paddingTop: 0,
  backgroundColor: "antiquewhite",
};

class App extends Component {
  state = {
    isCartOpen: false,
    products: [], // p1, p2, p3
  };

  addToCart = (product) => {
    this.setState((prevState) => ({
      products: prevState.products.some((el) => el.id === product.id)
        ? prevState.products.map((el) => {
            if (el.id !== product.id) return el;
            el.quantity += 1;
            return el;
          })
        : // el.id !== product.id ? el : { ...el, quantity: el.quantity + 1 }
          [...prevState.products, { ...product, quantity: 1 }],
    }));
  };

  removeProduct = (id) => {
    this.setState((prev) => ({
      products:
        prev.products.find((el) => el.id === id).quantity === 1
          ? prev.products.filter((el) => el.id !== id)
          : prev.products.map((el) => {
              if (el.id !== id) return el;
              el.quantity -= 1;
              return el;
            }),
    }));
  };

  openCart = () => {
    this.setState({ isCartOpen: true });
  };

  closeCart = () => {
    this.setState({ isCartOpen: false });
  };

  render() {
    return (
      <>
        <Header openCart={this.openCart} />
        <div style={containerStyles}>
          <Filter />
          <ProductsList addToCart={this.addToCart} />
        </div>
        {/* {this.state.isCartOpen && ( */}
        <Cart
          products={this.state.products}
          isCartOpen={this.state.isCartOpen}
          closeCart={this.closeCart}
          removeProduct={this.removeProduct}
        />
        {/* )} */}
        {/* <Counter a="sd" /> */}
      </>
    );
  }
}

export default App;
