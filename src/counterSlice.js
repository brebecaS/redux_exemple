import { createSlice } from "@reduxjs/toolkit";

// 1. Create slice
export const counterSlice = createSlice({
  // 1. Name of the slice
  name: "counter",
  // 2. Initial state
  initialState: {
    counter: 0,
  },
  // 3. Reducers
  reducers: {
    incrementByValue: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    incrementByOne: (state) => {
      state.counter = state.counter + 1;
    },
    decrementByOne: (state) => {
      state.counter = state.counter - 1;
    },
  },
});

// 2. Export actions
export const { incrementByValue, incrementByOne, decrementByOne } =
  counterSlice.actions;

// 3. Export reducer
export default counterSlice.reducer;
