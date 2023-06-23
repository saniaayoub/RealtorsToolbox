import {SET_USER_TOKEN, SET_THEME, SET_EXIST, ADD_EVENT} from './Constants';

const initialState = {
  userToken: null,
  theme: 'dark',
  events: {},
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TOKEN:
      return {
        ...state,
        userToken: action.payload,
      };
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case SET_EXIST:
      return {
        ...state,
        exist: action.payload,
      };

    case ADD_EVENT:
      return {
        ...state,
        events: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
