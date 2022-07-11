import {success, error, abort} from '@redux-requests/core';

export const USER_LOGIN = 'USER_LOGIN';

export const user_login = payload => ({
  type: USER_LOGIN,
  payload,
});

const initialState = {
  pending: false,
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    //USER_LOGIN
    case USER_LOGIN: {
      return {...state, pending: true};
    }
    case success(USER_LOGIN): {
      return {
        ...state,
        ...action.payload,
        pending: false,
      };
    }
    case error(USER_LOGIN): {
      return {...state, error: true, pending: false, ...action.payload};
    }
    case abort(USER_LOGIN): {
      return {...state, pending: false};
    }

    /**
     * DEFAULT_CASE
     */
    default:
      return state;
  }
};
export default userReducer;
