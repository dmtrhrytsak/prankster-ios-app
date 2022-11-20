import { FlatList } from 'react-native';

import { Divider } from '../ui/divider/Divider';
import type { Joke } from './types';
import { JokeItem } from './JokeItem';
import { useJokes } from './JokesContext';
import { useJokesActions } from './useJokesActions';

export const JokeHistory = () => {
  const {
    state: { jokes },
  } = useJokes();
  const { likeJoke } = useJokesActions();

  const handleFavPress = (jokeId: Joke['id']) => {
    likeJoke(jokeId);
  };

  return (
    <FlatList
      data={jokes.ids}
      keyExtractor={(jokeId) => String(jokeId)}
      ItemSeparatorComponent={() => <Divider />}
      ListFooterComponent={() => <Divider />}
      renderItem={({ item: jokeId }) => (
        <JokeItem jokeId={jokeId} onFavPress={handleFavPress} />
      )}
    />
  );
};
