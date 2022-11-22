import { combineReducers } from '@reduxjs/toolkit';

import { jokesReducer } from '../jokes/jokesSlice';

export const rootReducer = combineReducers({
  jokes: jokesReducer,
});
