import axios from 'axios';
import store from '../store';
import { setToken } from '../actions'
import { URL, AUTH } from '../config/Api';

export function login(username, password) {
  return axios
    .post(URL + AUTH, {
      username,
      password
    })
    .then(function (response) {
      store.dispatch(setToken(response.data.token));
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function loggedIn() {
  return store.getState().token != null;
}
