const initialState = {
  token: "",
  loggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOKEN": {
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