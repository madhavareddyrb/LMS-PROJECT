import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  secondName: "madhava",
};

export const counterSlice = createSlice({
  name: "CounterApp",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value < 10) {
        state.value += 1;
      }
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
