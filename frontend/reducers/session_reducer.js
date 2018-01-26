import {
  RECEIVE_USER,
  RECEIVE_LOGOUT
} from '../actions/session_actions';

const _nullUser = {
  currentUser: null
};

const sessionReducer = (store = {}, action) => {
  Object.freeze(store);
};
