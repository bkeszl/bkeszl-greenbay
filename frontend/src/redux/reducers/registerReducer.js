const initialState = {
  username: '',
  password: '',
  errText: '',
}

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_REGISTER_INPUT':         
      return {
          ...state,
          ...action.payload
        }
      case 'REGISTER_USER':
        return {
          ...state,
        }
      case 'REGISTER_ERROR':{
        return {
          ...state,
          ...action.payload
        }
      }
    default: 
      return state;
  }
}

export default registerReducer;