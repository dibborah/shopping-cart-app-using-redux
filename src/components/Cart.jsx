import { useCart } from "../contexts/CartProvider";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useCart();
  const totalAmount = cart.reduce((current, accumulator) => {
    return current + accumulator.price * accumulator.quantity;
  }, 0);
  if (totalAmount === 0) {
    return <h1>No items found!!!</h1>;
  }
  return (
    <div>
      {cart &&
        cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      <div>
        <h1>Total Amount: {totalAmount}</h1>
      </div>
    </div>
  );
};

export default Cart;
