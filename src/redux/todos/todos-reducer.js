import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import todoActions from "./todos-actions";

const itemsReducer = createReducer([], {
  [todoActions.add]: (state, { payload }) => [...state, payload],
  [todoActions.remove]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [todoActions.toggleCompleted]: (state, { payload }) =>
    state.map((todo) =>
      todo.id === payload ? { ...todo, completed: !todo.completed } : todo
    ),
});

const filterReducer = createReducer("", {
  [todoActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case ACTION.ADD:
//       return [...state, payload];
//     case ACTION.REMOVE:
//       return state.filter(({ id }) => id !== payload);
//     case ACTION.TOGGLE_COMPLETED:
//       return state.map((todo) =>
//         todo.id === payload ? { ...todo, completed: !todo.completed } : todo
//       );
//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case ACTION.CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };
