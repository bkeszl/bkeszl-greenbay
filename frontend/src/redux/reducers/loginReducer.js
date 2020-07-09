const initialState = {
  username: '',
  password: '',
  errText: '',
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT':         
      return {
          ...state,
          ...action.payload
        }
      case 'LOGIN_USER':
        return {
          ...state,
        }
      case 'LOGIN_ERROR':{
        return {
          ...state,
          ...action.payload
        }
      }
    default: 
      return state;
  }
}

export default loginReducer;