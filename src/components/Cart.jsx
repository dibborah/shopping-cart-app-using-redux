import { useSelector } from "react-redux";
import CartItem from "./CartItem";

// Need not return in redux ;
// redux explicitly return since it internally uses immer js

const Cart = () => {
  const cart = useSelector((state) => {
    return state.cart;
  });

  const totalAmount = cart.reduce((current, accumulator) => {
    return current + accumulator.payload.price * accumulator.payload.quantity;
  }, 0);
  if (totalAmount === 0) {
    return <h1>No items found!!!</h1>;
  }

  return (
    <div>
      {cart &&
        cart.map((item) => {
          return <CartItem key={item.payload.id} {...item} />;
        })}
      <div>
        <h1>Total Amount: {totalAmount}</h1>
      </div>
    </div>
  );
};

export default Cart;
