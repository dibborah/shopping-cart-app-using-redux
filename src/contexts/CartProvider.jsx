import { createContext, useContext, useReducer } from "react";

const cartContext = createContext();

const reducer = (cart, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...cart, action.payload];
    case "REMOVE_ITEM":

    case "INCREASE_ITEM":

    case "DECREASE_ITEM":
  }
};

const initialState = [];

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, initialState);
  const addProductToCart = (id) => {
    dispatch({ type: "ADD_ITEM", payload: { id: id } }); // Whatever inside dispatch is called ACTION
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
