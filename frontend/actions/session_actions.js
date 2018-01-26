import * as sessionAPIUtil from '../util/session_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_LOGOUT = "RECEIVE_LOGOUT";

const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

const receiveLogout = () => ({
  type: RECEIVE_LOGOUT,
});

export const requestSignup = (username, password) => dispatch => {
  return sessionAPIUtil.fetchSignup(username, password)
    .then(user => dispatch(receiveUser(user)));
};

export const requestLogout = () => dispatch => {
  return sessionAPIUtil.fetchLogout()
    .then(() => dispatch(receiveLogout()));
};
