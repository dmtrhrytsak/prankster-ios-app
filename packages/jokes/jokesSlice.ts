import {
  type PayloadAction,
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import { DateUtils } from '../utils/DateUtils';
import type {
  Joke,
  GetJokeHistorySucceededPayload,
  GetJokeHistoryFailedPayload,
  GetTodayJokeSucceededPayload,
  GetTodayJokeFailedPayload,
  JokeHistoryChangedPayload,
  LikeJokeRequestedPayload,
  LikeJokeSucceededPayload,
  LikeJokeFailedPayload,
} from './types';

export const jokesAdapter = createEntityAdapter<Joke>({
  sortComparer: (a, b) => DateUtils.compare(b.fetched_at, a.fetched_at),
});

type JokeState = {
  loading: boolean;
  error: Error | null;
  todayJokeId: number;
};

const initialState = jokesAdapter.getInitialState<JokeState>({
  loading: false,
  error: null,
  todayJokeId: -1,
});

export const jokesSlice = createSlice({
  name: 'jokes',
  initialState: initialState,
  reducers: {
    getJokeHistoryRequested: (state) => {},
    getJokeHistorySucceeded: (
      state,
      action: PayloadAction<GetJokeHistorySucceededPayload>
    ) => {
      jokesAdapter.setAll(state, action.payload);
      state.loading = false;
    },
    getJokeHistoryFailed: (
      state,
      action: PayloadAction<GetJokeHistoryFailedPayload>
    ) => {
      state.error = action.payload;
      state.loading = false;
    },
    getTodayJokeRequested: (state) => {},
    getTodayJokeSucceeded: (
      state,
      action: PayloadAction<GetTodayJokeSucceededPayload>
    ) => {
      state.todayJokeId = action.payload.id;
      state.loading = false;
    },
    getTodayJokeFailed: (
      state,
      action: PayloadAction<GetTodayJokeFailedPayload>
    ) => {
      state.error = action.payload;
      state.loading = false;
    },
    jokeHistoryChanged: (
      state,
      action: PayloadAction<JokeHistoryChangedPayload>
    ) => {
      jokesAdapter.setAll(state, action.payload);
    },
    likeJokeRequested: (
      state,
      action: PayloadAction<LikeJokeRequestedPayload>
    ) => {},
    likeJokeSucceeded: (
      state,
      action: PayloadAction<LikeJokeSucceededPayload>
    ) => {
      const joke = state.entities[action.payload];
      if (joke) {
        joke.liked = !joke.liked;
      }
    },
    likeJokeFailed: (state, action: PayloadAction<LikeJokeFailedPayload>) => {
      state.error = action.payload;
    },
  },
});

export const jokesReducer = jokesSlice.reducer;
