import loginService from "../../services/loginService";
import history from "../../history";
import itemService, {sendItemToDb} from "../../services/itemService";
import registerService from "../../services/registerService";
import jwt from "jsonwebtoken";

export const changeInputAction = (event) => ({
  type: "CHANGE_INPUT",
  payload: { [event.target.name]: event.target.value, errText: "" },
});

export const changeRegisterInputAction = (event) => ({
  type: "CHANGE_REGISTER_INPUT",
  payload: { [event.target.name]: event.target.value, errText: "" },
});

export const changeNewItemInputAction = (event) => ({
  type: "CHANGE_NEWITEM_INPUT",
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
  let register = await registerService(
    state.registerReducer.username,
    state.registerReducer.password
  );
  if (register.status === 200) {
    history.push("/login");
  } else {
    dispatch({
      type: "REGISTER_ERROR",
      payload: {
        errText: register.message,
      },
    });
  }
};

export const logUserOut = () => (dispatch) => {
  localStorage.removeItem("greenbaytoken");
  dispatch({
    type: "LOG_USER_OUT",
    payload: {
      username: "GUEST",
      token: "",
      loggedIn: false,
    },
  });
};

export const listItem = (event) => async (dispatch, getState) => {
  event.preventDefault();
  let state = getState();
  let itemToSend = {
    name: state.newReducer.name,
    description: state.newReducer.description,
    price: state.newReducer.price,
    photoUrl: state.newReducer.url,
  }
  let item = await sendItemToDb(itemToSend);  
  if(item.status === 200){
    console.log("Item set");
    
  } else {
    dispatch({
      type: 'ITEM_SUBMIT_ERROR',
      payload: {
        errText: item.status
      }
    })
  }
}