import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../features/cart/CartSlice";

const Product = ({ id, img, title, price }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return state.cart;
  });
  const handleAddCart = () => {
    for (let item of cart) {
      if (item.payload.id === id) {
        return alert("Item already added!!!");
      }
    }
    const newItem = {
      id: id,
      title: title,
      price: price,
      quantity: 1,
    };

    dispatch(addProductToCart(newItem));
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
