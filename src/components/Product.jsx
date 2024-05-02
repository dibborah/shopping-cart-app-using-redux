import React from "react";
import { useCart } from "../contexts/CartProvider";

const Product = ({ id, img, title, price }) => {
  const { addProductToCart } = useCart();
  const handleAddCart = () => {
    const newItem = {
      id: id,
      title: title,
      price: price,
    };
    addProductToCart(newItem);
  };
  return (
    <div
      style={{
        padding: "1rem",
        margin: "1rem",
        border: "2px solid black",
      }}
    >
      <p>id: {id}</p>
      <img src={img} alt={title} height={200} />
      <p>title: {title}</p>
      <p>price: {price}</p>
      <button onClick={handleAddCart}>Add Item</button>
    </div>
  );
};

export default Product;
