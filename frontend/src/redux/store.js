import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./reducers/loginReducer";
import authReducer from "./reducers/authReducer";
import homeReducer from "./reducers/homeReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  authReducer,
  homeReducer
});
const composedEnhancers = compose(
  applyMiddleware(thunk),
  composeWithDevTools()
);

export default createStore(rootReducer, composedEnhancers);
