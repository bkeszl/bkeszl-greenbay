import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

async function fetchItems() {
  return axios({
    method: 'GET',
    url: process.env.REACT_APP_BACKEND_URL + '/item/notsold',
    headers: {authorization: localStorage.getItem('greenbaytoken')}
  }).then((response) => {
    return response
  }).catch(err => {
    return err.response.data;
  });
}

export function sendItemToDb(item) {  
  return axios({
    method: 'POST',
    url: process.env.REACT_APP_BACKEND_URL + '/item/new',
    headers: {authorization: localStorage.getItem('greenbaytoken')},
    data: item
  }).then((response) => {
    return response
  }).catch(err => {
    return err.response.data;
  });
}

export default fetchItems;