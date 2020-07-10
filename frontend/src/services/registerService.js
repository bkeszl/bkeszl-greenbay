import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config()

 async function register (userName, passWord) {
  console.log(passWord);
  
  return axios({
    method: 'POST',
    url: process.env.REACT_APP_BACKEND_URL + '/user/signup',
    data: {
      username: userName,
      password: passWord
    }
  }).then((response) => {
    return response
  }).catch(err => {
    if(err.message === 'Network Error'){
      return err;
    }
    return err.response.data;
  }); 
}

export default register;