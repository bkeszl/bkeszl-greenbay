import jwt from 'jsonwebtoken';

let token = localStorage.getItem('greenbaytoken');
let usernameFromToken;

try {
  usernameFromToken = jwt.decode(token).user.username;
} catch (err) {
  console.log(err);
}
const initialState = {
  username: usernameFromToken || 'Guest',
  token: "",
  loggedIn: (usernameFromToken ? true : false)
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOKEN": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case 'SET_USERNAME': {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "LOG_USER_OUT": {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
