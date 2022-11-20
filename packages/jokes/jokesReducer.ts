import type { JokesAction, JokesState } from './types';

export const jokesReducer = (
  state: JokesState,
  action: JokesAction
): JokesState => {
  switch (action.type) {
    case 'GET_JOKE_HISTORY_REQUESTED':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'GET_JOKE_HISTORY_SUCCEEDED':
      return {
        ...state,
        loading: false,
        jokes: {
          ids: action.payload.map((joke) => joke.id),
          entities: action.payload.reduce(
            (acc, joke) => ({
              ...acc,
              [joke.id]: joke,
            }),
            {}
          ),
        },
      };
    case 'GET_JOKE_HISTORY_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'GET_TODAY_JOKE_REQUESTED':
      return {
        ...state,
        loading: true,
      };
    case 'GET_TODAY_JOKE_SUCCEEDED':
      return {
        ...state,
        loading: false,
        todayJokeId: action.payload.id,
      };
    case 'GET_TODAY_JOKE_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'JOKE_HISTORY_CHANGED':
      return {
        ...state,
        jokes: {
          ids: action.payload.map((joke) => joke.id),
          entities: action.payload.reduce(
            (acc, joke) => ({
              ...acc,
              [joke.id]: joke,
            }),
            {}
          ),
        },
      };
    case 'LIKE_JOKE_REQUESTED':
      return {
        ...state,
      };
    case 'LIKE_JOKE_SUCCEEDED':
      return {
        ...state,
        jokes: {
          ...state.jokes,
          entities: {
            ...state.jokes.entities,
            [action.payload]: {
              ...state.jokes.entities[action.payload],
              liked: !state.jokes.entities[action.payload].liked,
            },
          },
        },
      };
    case 'LIKE_JOKE_FAILED':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
