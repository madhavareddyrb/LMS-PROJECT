import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import CoursesSlice  from "./features/counter/CoursesSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    Courses: CoursesSlice,
    // addtocart: addToCartSlice,
  },
});
