import loginService from "../../services/loginService";
import history from '../../history';
import itemService from "../../services/itemService";
export const changeInputAction = (event) => ({
  type: "CHANGE_INPUT",
  payload: { [event.target.name]: event.target.value, errText: '' },
});

export const loginUserAction = (event) => async (dispatch, getState) => {
  event.preventDefault();
  let state = getState();
  state = state.loginReducer;
  let login = await loginService(state.username, state.password);
  if (login.status === 200) {
    localStorage.setItem('greenbaytoken', login.data.token)
    dispatch({
      type: "SET_TOKEN",
      payload: {
        loggedIn: true,
        token: login.data.token,
      },
    });
    history.push('/')
  } else {
    dispatch({
      type: "LOGIN_ERROR",
      payload: { errText: login.message },
    });
  }
};
export const getSellableItemsAction = () => async (dispatch, getState) => {
  let items = await itemService()
  console.log(items);
  
  if (items.status === 200) {
    dispatch({
      type: "LOAD_ITEMS",
      payload: {
        items: items.data
      }
    })
  }
  
}
