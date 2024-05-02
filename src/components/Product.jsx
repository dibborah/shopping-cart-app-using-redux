import { useCart } from "../contexts/CartProvider";

const Product = ({ id, img, title, price }) => {
  const { cart, addProductToCart } = useCart();
  const handleAddCart = () => {
    for (let item of cart) {
      if (item.id === id) {
        return alert("Item already added!!!");
      }
    }
    const newItem = {
      id: id,
      title: title,
      price: price,
      quantity: 1,
    };
    addProductToCart(newItem);
    alert("Item added successfully");
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
