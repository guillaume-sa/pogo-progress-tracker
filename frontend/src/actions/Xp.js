import { apiClient } from '../utils/ApiClient';
import { XP } from '../config/Xp';
import store from '../store';
import { setXpEntries } from '../actions'

export const addXp = function(value) {
  return apiClient().post(XP, {
    value: value,
    datetime: new Date()
  })
  .then(function (response) {
     getXpEntries();
  })
  .catch(function (error) {
    console.log(error);
  });
}


export const getXpEntries = function() {
  return apiClient().get(XP)
  .then(function (response) {
     let user_xp_entries = response.data;
     if (user_xp_entries.length > 0){
       store.dispatch(setXpEntries(user_xp_entries));
     }
  })
  .catch(function (error) {
    console.log(error);
  });
}
