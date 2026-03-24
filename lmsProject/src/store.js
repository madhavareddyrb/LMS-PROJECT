import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
// import { addToCartSlice } from "./features/counter/AddToCart";


export const store = configureStore({
  reducer: {
    counter: counterSlice,
    // addtocart: addToCartSlice,
  },
});
