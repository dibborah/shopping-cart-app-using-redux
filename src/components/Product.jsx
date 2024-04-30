import React from "react";

const Product = ({ id, img, title, price }) => {
  return (
    <div
      style={{
        padding: "1rem",
        margin: "1rem",
        border: "2px solid black",
      }}
    >
      <p>id: {id}</p>
      <img src={img} alt={title} height={200}/>
      <p>title: {title}</p>
      <p>price: {price}</p>
    </div>
  );
};

export default Product;
