import type { RootState } from '../store/types';
import { jokesAdapter } from './jokesSlice';

const selectLoading = (state: RootState) => state.jokes.loading;
const selectError = (state: RootState) => state.jokes.error;

const { selectAll, selectById, selectIds, selectEntities, selectTotal } =
  jokesAdapter.getSelectors((state: RootState) => state.jokes);

const selectJokeHistory = (state: RootState) => selectAll(state);

const selectTodayJoke = (state: RootState) =>
  selectById(state, state.jokes.todayJokeId);

export const JokesSelector = {
  selectLoading,
  selectError,
  selectAll,
  selectById,
  selectIds,
  selectTotal,
  selectTodayJoke,
  selectJokeHistory,
};
