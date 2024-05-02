import { createContext, useContext, useReducer } from "react";

const cartContext = createContext();

const reducer = (cart, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...cart, action.payload];
    case "REMOVE_ITEM":
      return cart.filter((item) => item.id !== action.payload.id);
    case "INCREASE_ITEM":
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

    case "DECREASE_ITEM":
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    default:
      return cart;
  }
};

const initialState = [];

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, initialState);
  const addProductToCart = (newItem) => {
    dispatch({ type: "ADD_ITEM", payload: newItem }); // Whatever inside dispatch is called ACTION
  };
  const removeProductToCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: id } });
  };
  const increaseProductToCart = (id) => {
    dispatch({ type: "INCREASE_ITEM", payload: { id: id } });
  };
  const decreaseProductToCart = (id) => {
    dispatch({ type: "DECREASE_ITEM", payload: { id: id } });
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductToCart,
        increaseProductToCart,
        decreaseProductToCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => {
  return useContext(cartContext);
};
