import * as actionTypes from './types';

export const setToken = (data) => {
  return {
    type: actionTypes.SET_TOKEN,
    data
  }
}

export const setXpEntries = (data) => {
  return {
    type: actionTypes.SET_XP_ENTRIES,
    data
  }
}
