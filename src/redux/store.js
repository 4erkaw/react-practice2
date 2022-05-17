import { createStore, combineReducers } from "redux";
import counterReducer from "./counter/counter-reducer";
import todosReducer from "./todos/todos-reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

export const store = createStore(rootReducer);
