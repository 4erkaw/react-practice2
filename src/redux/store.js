import counterReducer from "./counter/counter-reducer";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import todosReducer from "./todos/todos-reducer";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

const myMiddleware = (store) => (next) => (action) => {
  console.log("My prosloyka", action);
  next(action);
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  myMiddleware,
  logger,
];

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

// export const persistor = persistStore(store);
