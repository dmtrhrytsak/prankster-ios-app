import { call, put, takeEvery, all } from 'redux-saga/effects';

import type { Joke } from './types';
import { JokeActions } from './JokeActions';
import { JokesAPI } from './JokesAPI';
import { JokesStorage } from './JokesStorage';
import { JokesUtils } from './JokesUtils';

function* getJokeHistory() {
  try {
    const jokeHistory: Joke[] = yield call(JokesStorage.getJokeHistory);
    yield put(JokeActions.getJokeHistorySucceeded(jokeHistory));
  } catch (error) {
    yield put(JokeActions.getJokeHistoryFailed(error as Error));
  }
}

function* watchGetJokeHistory() {
  yield takeEvery(JokeActions.getJokeHistoryRequested.type, getJokeHistory);
}

function* getTodayJoke() {
  try {
    const todayJokeFromStorage: Joke | null = yield call(
      JokesStorage.getTodayJoke
    );

    if (
      !todayJokeFromStorage ||
      !JokesUtils.isTodayJoke(todayJokeFromStorage)
    ) {
      const todayJokeFromServer: Joke = yield call(JokesAPI.fetchRandomJoke);
      yield call(JokesStorage.setTodayJoke, todayJokeFromServer);

      const jokeHistory: Joke[] = yield call(JokesStorage.getJokeHistory);
      const newJokeHistory: Joke[] = [todayJokeFromServer, ...jokeHistory];
      yield call(JokesStorage.setJokeHistory, newJokeHistory);
      yield put(JokeActions.jokeHistoryChanged(newJokeHistory));

      yield put(JokeActions.getTodayJokeSucceeded(todayJokeFromServer));
      return;
    }

    yield put(JokeActions.getTodayJokeSucceeded(todayJokeFromStorage));
  } catch (error) {
    yield put(JokeActions.getTodayJokeFailed(error as Error));
  }
}

function* watchGetTodayJoke() {
  yield takeEvery(JokeActions.getTodayJokeRequested.type, getTodayJoke);
}

function* likeJoke(action: ReturnType<typeof JokeActions.likeJokeRequested>) {
  try {
    const jokeHistory: Joke[] = yield call(JokesStorage.getJokeHistory);
    const newJokeHistory = jokeHistory.map((joke) =>
      joke.id === action.payload ? { ...joke, liked: !joke.liked } : joke
    );
    yield call(JokesStorage.setJokeHistory, newJokeHistory);
    yield put(JokeActions.jokeHistoryChanged(newJokeHistory));
  } catch (error) {
    yield put(JokeActions.likeJokeFailed(error as Error));
  }
}

function* watchLikeJoke() {
  yield takeEvery(JokeActions.likeJokeRequested.type, likeJoke);
}

export function* jokeSagas() {
  yield all([watchGetJokeHistory(), watchGetTodayJoke(), watchLikeJoke()]);
}
