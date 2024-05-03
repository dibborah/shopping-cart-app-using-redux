import { createSlice } from "@reduxjs/toolkit";

const initialValue = [];

const cartSlice = createSlice({
  name: "carty",
  initialState: initialValue,
  reducers: {
    addProductToCart: (cart, payload) => {
      // return [...cart, payload];
      cart.push(payload);
    },
    removeProductToCart: (cart, actions) => {
      return cart.filter((item) => item.payload.id !== actions.payload.id);
    },
    increaseProductToCart: (cart, actions) => {
      // return cart.map((item) => {
      //   if (item.payload.id === actions.payload.id) {
      //     return {
      //       ...item,
      //       payload: { ...item.payload, quantity: item.payload.quantity + 1 },
      //     };
      //   }
      //   return item;
      // });

      cart.forEach((item)=>{
        if(item.payload.id === actions.payload.id){
          item.payload.quantity = item.payload.quantity + 1;
        }
      })
    },
    decreaseProductToCart: (cart, actions) => {

      // return cart.map((item) => {
      //   if (item.payload.id === actions.payload.id) {
      //     return {
      //       ...item,
      //       payload: { ...item.payload, quantity: item.payload.quantity - 1 },
      //     };
      //   }
      //   return item;
      // });

      cart.forEach((item)=>{
        if(item.payload.id === actions.payload.id){
          item.payload.quantity = item.payload.quantity - 1;
        }
      })
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
