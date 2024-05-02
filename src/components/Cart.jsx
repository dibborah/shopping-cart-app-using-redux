import { useCart } from "../contexts/CartProvider";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useCart();
  return (
    <div>
      {cart &&
        cart.map((item) => {
          return <CartItem key={item.id} {...item}/>;
        })}
    </div>
  );
};

export default Cart;
