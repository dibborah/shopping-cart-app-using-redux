import { createContext, useContext, useReducer } from "react";

const cartContext = createContext();

const reducer = (state, action) => {};
const initialState = [];
const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, initialState);
  const addProductToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: { id: id } }); // Whatever inside dispatch is called ACTION
  };
  const removeProductToCart = () => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: id } });
  };
  const increaseProductToCart = () => {
    dispatch({ type: "INCREASE_ITEM", payload: { id: id } });
  };
  const decreaseProductToCart = () => {
    dispatch({ type: "DECREASE_ITEM", payload: { id: id } });
  };
  return (
    <cartContext.Provider
      value={{
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

const AuthContext = () => {
  return useContext(cartContext);
};
