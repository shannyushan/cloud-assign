import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { Login } from "./Login/reducer";
import { Category } from "./Category/reducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      login: Login,
      category: Category,
    }),
    process.env.NODE_ENV === "development"
      ? compose(composeWithDevTools(applyMiddleware(...[thunk, logger])))
      : compose(applyMiddleware(...[thunk]))
  );

  return store;
};
