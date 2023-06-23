import {SET_USER_TOKEN, SET_THEME, SET_EXIST, ADD_EVENT} from './Constants';

export const setUserToken = value => {
  return {
    type: SET_USER_TOKEN,
    payload: value,
  };
};

export const setTheme = value => {
  return {
    type: SET_THEME,
    payload: value,
  };
};

export const setExist = value => {
  return {
    type: SET_EXIST,
    payload: value,
  };
};

export const addEvent = value => {
  return {
    type: ADD_EVENT,
    payload: value,
  };
};
