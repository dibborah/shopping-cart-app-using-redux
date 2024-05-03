import { useDispatch } from "react-redux";
import {
  increaseProductToCart,
  decreaseProductToCart,
  removeProductToCart,
} from "../features/cart/CartSlice";

// learn the count thing
// Put designs via seeing the styles from codProg.com
// Use the redux implicit return feature

const CartItem = ({ payload }) => {
  const { id, title, price, quantity } = payload;
  const dispatch = useDispatch();
  return (
    <div
      style={{
        padding: "1rem",
        margin: "1rem",
        border: "1px solid black",
      }}
    >
      <p>id: {id}</p>
      <p>title: {title}</p>
      <p>price: {price * quantity}</p>
      <p>quantity: {quantity}</p>
      <div>
        <button onClick={() => dispatch(increaseProductToCart({ id }))}>
        {
          // {id: id} => {id} // Internally they work the same
        }
          Increase Quantity
        </button>
        <button
          onClick={() =>
            quantity > 1 && dispatch(decreaseProductToCart({ id }))
          }
        >
          Decrease Quantity
        </button>
        <button onClick={() => dispatch(removeProductToCart({ id }))}>
          Remove Quantity
        </button>
      </div>
    </div>
  );
};

export default CartItem;
