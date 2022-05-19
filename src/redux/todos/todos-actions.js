import { generate } from "shortid";
import { createAction } from "@reduxjs/toolkit";

const add = createAction("todos/Add", (text) => ({
  payload: {
    id: generate(),
    text,
    completed: false,
  },
}));

const remove = createAction("todos/Remove");
const changeFilter = createAction("todos/changeFilter");
const toggleCompleted = createAction("todos/toggleCompleted");

const todoActions = { add, remove, changeFilter, toggleCompleted };

export default todoActions;

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
