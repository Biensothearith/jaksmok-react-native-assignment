import {call, put, takeLatest} from 'redux-saga/effects';
import {error, success} from '@redux-requests/core';
import NavigationService from '../../Service/navigationService';
import {NAV_TYPES} from '../../Navigation/navTypes';
import {axios} from '../app/index';
import nomalize from './../../Utils/normiliseServerResponce';
import {USER_LOGIN} from './reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
export function* userLoginWorker({payload}) {
  try {
    const userlogin = yield call(axios.post, '/login', payload);
    yield (axios.defaults.headers.common = {
      Authorization: `Bearer ${nomalize(userlogin).token}`,
    });
    yield put({
      type: success(USER_LOGIN),
      payload: {
        userlogin: nomalize(userlogin),
      },
    });
    yield (axios.defaults.headers.common = {
      Authorization: `Bearer ${nomalize(userlogin).token}`,
    });
    yield call(
      AsyncStorage.setItem,
      '@DataUser',
      JSON.stringify(nomalize(userlogin)),
    );
    NavigationService.reset(NAV_TYPES.CORE);
  } catch (e) {
    const parseError = yield JSON.parse(JSON.stringify(e));
    const message = parseError.data || parseError.response;
    yield put({
      type: error(USER_LOGIN),
      payload: {userloginError: message},
    });
  }
}

export function* userSaga() {
  yield takeLatest(USER_LOGIN, userLoginWorker);
}
