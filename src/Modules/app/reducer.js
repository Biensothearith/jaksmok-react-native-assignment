import { error, success,abort } from "@redux-requests/core";


export const SET_APP_LOCALE = 'SET_APP_LOCALE';
export const SET_NETWORK_STATUS = 'SET_NETWORK_STATUS';
export const APP_INIT = 'APP_INIT';

export const setLocale = payload => ({
  type: SET_APP_LOCALE,
  payload,
});
export const setNetworkStatus = payload => ({
  type: SET_NETWORK_STATUS,
  payload,
});
export const startupWorker = () => ({
  type: APP_INIT,
});

const initialState = {
  locale: 'en',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    /**
     * APP_INIT
     */
    case APP_INIT:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case success(APP_INIT):
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case error(APP_INIT):
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: true,
      };
    case abort(APP_INIT):
      r;

    /**
     * DEFAULT CASE
     */
    default:
      return state;
  }
};
export default reducer;
