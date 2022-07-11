import {call, put, takeLatest} from 'redux-saga/effects';
import {error, success} from '@redux-requests/core';

import {axios} from '../app/index';
import nomalize from './../../Utils/normiliseServerResponce';
import {BOOKS, BOOK} from './reducer';

export function* getBooksWorker({payload}) {
  try {
    const books = yield call(
      axios.get,
      '/books/' + payload.page + '/' + payload.size,
    );
    yield put({
      type: success(BOOKS),
      payload: {
        books: nomalize(books),
      },
    });
  } catch (e) {
    const parseError = yield JSON.parse(JSON.stringify(e));
    const message = parseError.data || parseError.response;
    yield put({
      type: error(BOOKS),
      payload: {booksError: message},
    });
  }
}

export function* getBookWorker({payload}) {
  try {
    const book = yield call(axios.get, '/books/' + payload);
    yield put({
      type: success(BOOK),
      payload: {
        book: nomalize(book),
      },
    });
  } catch (e) {
    const parseError = yield JSON.parse(JSON.stringify(e));
    const message = parseError.data || parseError.response;
    yield put({
      type: error(BOOK),
      payload: {bookError: message},
    });
  }
}

export function* homeSaga() {
  yield takeLatest(BOOKS, getBooksWorker);
  yield takeLatest(BOOK, getBookWorker);
}
