import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

async function login(userName, passWord) {
  return axios({
    method: 'POST',
    url: process.env.REACT_APP_BACKEND_URL + '/user/login',
    data: {
      username: userName,
      password: passWord
    }
  }).then((response) => {
    return response
  }).catch(err => {
    return err.response.data;
  });  
  
}

export default login;