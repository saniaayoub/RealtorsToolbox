import {
  SET_USER_TOKEN,
  SET_THEME,
  SET_EXIST,
} from './Constants';

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
