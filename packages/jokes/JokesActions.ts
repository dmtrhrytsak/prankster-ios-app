import type {
  GetJokeHistorySucceededPayload,
  GetJokeHistoryFailedPayload,
  JokeHistoryChangedPayload,
  GetTodayJokeSucceededPayload,
  GetTodayJokeFailedPayload,
  LikeJokeSucceededPayload,
  LikeJokeFailedPayload,
} from './types';

export const getJokeHistoryRequested = () => ({
  type: 'GET_JOKE_HISTORY_REQUESTED' as const,
});

export const getJokeHistorySucceeded = (
  payload: GetJokeHistorySucceededPayload
) => ({
  type: 'GET_JOKE_HISTORY_SUCCEEDED' as const,
  payload,
});

export const getJokeHistoryFailed = (payload: GetJokeHistoryFailedPayload) => ({
  type: 'GET_JOKE_HISTORY_FAILED' as const,
  payload,
});

export const jokeHistoryChanged = (payload: JokeHistoryChangedPayload) => ({
  type: 'JOKE_HISTORY_CHANGED' as const,
  payload,
});

export const getTodayJokeRequested = () => ({
  type: 'GET_TODAY_JOKE_REQUESTED' as const,
});

export const getTodayJokeFailed = (payload: GetTodayJokeFailedPayload) => ({
  type: 'GET_TODAY_JOKE_FAILED' as const,
  payload,
});

export const getTodayJokeSucceeded = (
  payload: GetTodayJokeSucceededPayload
) => ({
  type: 'GET_TODAY_JOKE_SUCCEEDED' as const,
  payload,
});

export const likeJokeRequested = () => ({
  type: 'LIKE_JOKE_REQUESTED' as const,
});

export const likeJokeSucceeded = (payload: LikeJokeSucceededPayload) => ({
  type: 'LIKE_JOKE_SUCCEEDED' as const,
  payload,
});

export const likeJokeFailed = (payload: LikeJokeFailedPayload) => ({
  type: 'LIKE_JOKE_FAILED' as const,
  payload,
});

export const JokesActions = {
  getJokeHistoryRequested,
  getJokeHistorySucceeded,
  getJokeHistoryFailed,
  jokeHistoryChanged,
  getTodayJokeRequested,
  getTodayJokeSucceeded,
  getTodayJokeFailed,
  likeJokeRequested,
  likeJokeSucceeded,
  likeJokeFailed,
};
