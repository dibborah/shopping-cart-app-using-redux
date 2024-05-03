import { createSlice } from "@reduxjs/toolkit";

// Need not return in redux ;
// redux explicitly return since it internally uses immer js

const initialValue = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialValue,
  reducers: {
    addProductToCart: (cart, payload) => {
      // return [...cart, payload];
      cart.push(payload);
    },
    removeProductToCart: (cart, action) => {
      return cart.filter((item) => item.payload.id !== action.payload.id);
    },
    increaseProductToCart: (cart, action) => {
      // return cart.map((item) => {
      //   if (item.payload.id === action.payload.id) {
      //     return {
      //       ...item,
      //       payload: { ...item.payload, quantity: item.payload.quantity + 1 },
      //     };
      //   }
      //   return item;
      // });

      cart.forEach((item) => {
        if (item.payload.id === action.payload.id) {
          item.payload.quantity = item.payload.quantity + 1;
        }
      });
    },
    decreaseProductToCart: (cart, action) => {
      // return cart.map((item) => {
      //   if (item.payload.id === action.payload.id) {
      //     return {
      //       ...item,
      //       payload: { ...item.payload, quantity: item.payload.quantity - 1 },
      //     };
      //   }
      //   return item;
      // });

      cart.forEach((item) => {
        if (item.payload.id === action.payload.id) {
          item.payload.quantity = item.payload.quantity - 1;
        }
      });
    },
  },
});

export const {
  addProductToCart,
  removeProductToCart,
  increaseProductToCart,
  decreaseProductToCart,
} = cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
