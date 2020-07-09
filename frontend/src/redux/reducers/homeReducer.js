const initialState = {
  items: []
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_ITEMS": {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default homeReducer;