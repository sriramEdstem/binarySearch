import { createSlice } from "@reduxjs/toolkit";

const BinarySlice = createSlice({
  name: "BinarySearch",
  initialState: {
    start: 0,
    end: 1000,
    numbers: [],
    output: null,
    time: null,
    count: 0,
  },
  reducers: {
    setStart: (state, action) => {
      state.start = action.payload;
    },
    setEnd: (state, action) => {
      state.end = action.payload;
    },
    setNumbers: (state, action) => {
      state.numbers = action.payload;
    },
    setOutput: (state, action) => {
      state.output = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
      console.log(action.payload);
    },
    setCount: (state, action) => {
      state.count = action.payload;
      console.log(action.payload);
    },
  },
});

export const { setStart, setEnd, setNumbers, setOutput, setTime, setCount } =
  BinarySlice.actions;
export default BinarySlice.reducer;
