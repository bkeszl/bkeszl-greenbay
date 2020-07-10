import loginService from "../../services/loginService";
import history from "../../history";
import itemService from "../../services/itemService";
import registerService from '../../services/registerService'
import jwt from "jsonwebtoken";

export const changeInputAction = (event) => ({
  type: "CHANGE_INPUT",
  payload: { [event.target.name]: event.target.value, errText: "" },
});

export const changeRegisterInputAction = (event) => ({
  type: "CHANGE_REGISTER_INPUT",
  payload: { [event.target.name]: event.target.value, errText: "" },
});

export const loginUserAction = (event) => async (dispatch, getState) => {
  event.preventDefault();
  let state = getState();
  state = state.loginReducer;
  let login = await loginService(state.username, state.password);  
  if (login.status === 200) {
    localStorage.setItem("greenbaytoken", login.data.token);
    dispatch({
      type: "SET_TOKEN",
      payload: {
        loggedIn: true,
        token: login.data.token,
      },
    });
    let decoded = jwt.decode(login.data.token);
    dispatch({
      type: "SET_USERNAME",
      payload: {
        username: decoded.user.username,
      },
    });
    history.push("/");
  } else {
    dispatch({
      type: "LOGIN_ERROR",
      payload: { errText: login.message },
    });
  }
};
export const getSellableItemsAction = () => async (dispatch, getState) => {
  let items = await itemService();
  console.log(items);
  if (items.status === 200) {
    dispatch({
      type: "LOAD_ITEMS",
      payload: {
        items: items.data.result,
      },
    });
  }
};

export const setUsernameAction = () => (dispatch) => {
  let token = localStorage.getItem("greenbaytoken");
  let usernameFromToken = jwt.decode(token).user.username;
  console.log(usernameFromToken);
  dispatch({
    type: "SET_USERNAME",
    payload: {
      username: usernameFromToken,
    },
  });
};

export const registerUserAction = (event) => async (dispatch, getState) => {
  event.preventDefault();
  let state = getState();
  let register = await registerService(state.registerReducer.username, state.registerReducer.password);

  console.log(register);
  if (register.status === 200) {
    history.push("/login");
  } else {
    dispatch({
      type: 'REGISTER_ERROR',
      payload: {
        payload: { errText: register.message },
      }
    })
  }
  
};
