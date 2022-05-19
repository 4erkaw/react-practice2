import { createSelector } from "@reduxjs/toolkit";

const getTodos = (state) => state.todos.items;
const getFilter = (state) => state.todos.filter;
const getTotalTodoCount = (state) => getTodos(state).length;

const getCompletedTodoCount = createSelector([getTodos], (todos) =>
  todos.reduce((total, item) => (item.completed ? total + 1 : total), 0)
);

const getVisibleTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {
    if (todos.length === 0) {
      return;
    }
    return todos.filter(({ text }) =>
      text.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

const todoSelectors = {
  getTodos,
  getFilter,
  getTotalTodoCount,
  getCompletedTodoCount,
  getVisibleTodos,
};

export default todoSelectors;

// export const getCompletedTodoCount = (state) =>
//   getTodos(state).reduce(
//     (total, item) => (item.completed ? total + 1 : total),
//     0
//   );

// export const getVisibleTodos = (state) => {
//   const items = getTodos(state);
//   const filter = getFilter(state);
//   if (items.length === 0) {
//     return;
//   }
//   return items.filter(({ text }) =>
//     text.toLowerCase().includes(filter.toLowerCase())
//   );
// };
