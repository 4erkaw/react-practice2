import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { increment, decrement } from "./counter-actions";

const valueReducer = createReducer(10, {
  [increment]: (state, { payload }) => state + payload,
  [decrement]: (state, { payload }) => state - payload,
});

// const valueReducer = (state = 10, { type, payload }) => {
//   switch (type) {
//     case actions.INCREMENT:
//       return state + payload;
//     case actions.DECREMENT:
//       return state - payload;
//     default:
//       return state;
//   }
// };

const stepReducer = (state = 5, action) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
