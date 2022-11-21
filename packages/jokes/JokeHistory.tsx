import { FlatList, View } from 'react-native';

import { Divider } from '../ui/divider/Divider';
import type { Joke } from './types';
import { JokeItem } from './JokeItem';
import { useJokesActions } from './useJokesActions';
import { useJokeHistory } from './useJokeHistory';

export const JokeHistory = () => {
  const { jokes } = useJokeHistory();
  const { likeJoke } = useJokesActions();

  const handleFavPress = (jokeId: Joke['id']) => {
    likeJoke(jokeId);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={jokes.ids}
        keyExtractor={(jokeId) => String(jokeId)}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item: jokeId }) => (
          <JokeItem jokeId={jokeId} onFavPress={handleFavPress} />
        )}
      />
    </View>
  );
};
