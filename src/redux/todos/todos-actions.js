import { generate } from "shortid";
import { createAction } from "@reduxjs/toolkit";

export const add = createAction("todos/Add", (text) => ({
  payload: {
    id: generate(),
    text,
    completed: false,
  },
}));

export const remove = createAction("todos/Remove");
export const changeFilter = createAction("todos/changeFilter");
export const toggleCompleted = createAction("todos/toggleCompleted");

// const add = (text) => ({
//   type: types.ADD,
//   payload: {
//     id: generate(),
//     text: text,
//     completed: false,
//   },
// });

// const remove = (todoId) => ({
//   type: types.REMOVE,
//   payload: todoId,
// });

// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

// const toggleCompleted = (todoId) => ({
//   type: types.TOGGLE_COMPLETED,
//   payload: todoId,
// });
