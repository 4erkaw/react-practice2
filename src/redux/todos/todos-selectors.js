export const getTodos = (state) => state.todos.items;
export const getFilter = (state) => state.todos.filter;

export const getVisibleTodos = (state) => {
  const items = getTodos(state);
  const filter = getFilter(state);
  if (items.length === 0) {
    return;
  }
  return items.filter(({ text }) =>
    text.toLowerCase().includes(filter.toLowerCase())
  );
};
