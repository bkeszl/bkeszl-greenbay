import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./reducers/loginReducer";
import authReducer from "./reducers/authReducer";
import homeReducer from "./reducers/homeReducer";
import navReducer from "./reducers/navReducer";
import registerReducer from "./reducers/registerReducer";
import newReducer from './reducers/newReducer'
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  authReducer,
  homeReducer,
  navReducer,
  registerReducer,
  newReducer
});
const composedEnhancers = compose(
  applyMiddleware(thunk),
  composeWithDevTools()
);

export default createStore(rootReducer, composedEnhancers);
