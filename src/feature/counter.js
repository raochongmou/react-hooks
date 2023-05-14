import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    featureCounter: 9,
    message: "hello world!"
  },
  reducers: {
    addCounter(state, { payload }) {
      state.featureCounter = state.featureCounter + payload;
    },
    changeMessageAction(state, { payload }) {
      state.message = payload;
    }
  }
});

export const addCounterAction = counterSlice.actions.addCounter;
export const changeMessageAction = counterSlice.actions.changeMessageAction;

export default counterSlice.reducer;
