import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import CartProvider from "./contexts/CartProvider";

const App = () => {
  return (
    <CartProvider>
      <Header />
      <Products />
    </CartProvider>
  );
};

export default App;
