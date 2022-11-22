import { all } from 'redux-saga/effects';

import { jokeSagas } from '../jokes/jokeSagas';

export function* rootSaga() {
  yield all([jokeSagas()]);
}
