import { JokeActions } from './JokeActions';

export type Joke = {
  id: number;
  type: string;
  setup?: string;
  delivery?: string;
  joke?: string;
  liked: boolean;
  fetched_at: string;
};

export type JokeItemProps = {
  joke: Joke;
  onFavPress: () => void;
};

export type JokesState = {
  loading: boolean;
  error: Error | null;
  jokes: {
    ids: Joke['id'][];
    entities: { [id: Joke['id']]: Joke };
  };
  todayJokeId: Joke['id'];
};
export type JokesContextType = {
  state: JokesState;
  dispatch: React.Dispatch<JokesAction>;
};

export type JokesAction = ReturnType<
  typeof JokeActions[keyof typeof JokeActions]
>;

export type GetJokeHistorySucceededPayload = Joke[];
export type GetJokeHistoryFailedPayload = Error;

export type JokeHistoryChangedPayload = Joke[];

export type GetTodayJokeSucceededPayload = Joke;
export type GetTodayJokeFailedPayload = Error;

export type LikeJokeRequestedPayload = Joke['id'];
export type LikeJokeSucceededPayload = Joke['id'];
export type LikeJokeFailedPayload = Error;
