const initialState = {
  name: '',
  url: '',
  description: '',
  price: '',
  errTExt: ''
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NEWITEM_INPUT':         
      return {
          ...state,
          ...action.payload
        }
    case 'ITEM_SUBMIT_ERROR':
      return {
         ...state,
         ...action.payload
        }  
    default:
      return state;
  }
};

export default navReducer;