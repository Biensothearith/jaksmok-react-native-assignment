import {success, error, abort} from '@redux-requests/core';

export const BOOKS = 'BOOKS';
export const BOOK = 'BOOK';

export const getBooks = payload => ({
  type: BOOKS,
  payload,
});
export const getBook = payload => ({
  type: BOOK,
  payload,
});
const initialState = {
  pending: false,
  error: false,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    //BOOKS
    case BOOKS: {
      return {...state, pending: true};
    }
    case success(BOOKS): {
      return {
        ...state,
        ...action.payload,
        pending: false,
      };
    }
    case error(BOOKS): {
      return {...state, error: true, pending: false, ...action.payload};
    }
    case abort(BOOKS): {
      return {...state, pending: false};
    }
    //BOOK
    case BOOK: {
      return {...state, pending: true};
    }
    case success(BOOK): {
      return {
        ...state,
        ...action.payload,
        pending: false,
      };
    }
    case error(BOOK): {
      return {...state, error: true, pending: false, ...action.payload};
    }
    case abort(BOOK): {
      return {...state, pending: false};
    }

    /**
     * DEFAULT_CASE
     */
    default:
      return state;
  }
};
export default homeReducer;
