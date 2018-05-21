import * as actionTypes from '../actions/types';

const initialState = {
    token: null,
    user_xp_entries: [],
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_TOKEN:
      return { ...state, token: action.data };
    case actionTypes.SET_XP_ENTRIES:
      return { ...state, user_xp_entries: action.data };
    default:
      return state;
  }
}

export default rootReducer;
