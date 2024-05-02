import { useCart } from "../contexts/CartProvider";

const CartItem = ({ id, title, price, quantity }) => {
  const { increaseProductToCart, decreaseProductToCart, removeProductToCart } =
    useCart();
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
        <button onClick={() => increaseProductToCart(id)}>
          Increase Quantity
        </button>
        <button onClick={() => decreaseProductToCart(id)}>
          Decrease Quantity
        </button>
        <button onClick={() => removeProductToCart(id)}>Remove Quantity</button>
      </div>
    </div>
  );
};

export default CartItem;
