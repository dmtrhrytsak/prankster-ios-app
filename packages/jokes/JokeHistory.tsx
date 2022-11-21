import {
  FlatList,
  SafeAreaView,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';

import { Divider } from '../ui/divider/Divider';
import { Body } from '../ui/typography/Body';
import { Center } from '../ui/center/Center';
import type { Joke } from './types';
import { JokeItem } from './JokeItem';
import { useJokesActions } from './useJokesActions';
import { useJokeHistory } from './useJokeHistory';

export const JokeHistory = () => {
  const { jokes, loading, error } = useJokeHistory();
  const { getJokeHistory, likeJoke } = useJokesActions();

  const handleFavPress = (jokeId: Joke['id']) => {
    likeJoke(jokeId);
  };

  if (error) {
    return (
      <Center>
        <Body>Something went wrong</Body>
      </Center>
    );
  }

  if (loading) {
    return (
      <Center>
        <ActivityIndicator />
      </Center>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={jokes.ids}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getJokeHistory} />
        }
        keyExtractor={(jokeId) => String(jokeId)}
        ItemSeparatorComponent={() => <Divider />}
        ListFooterComponent={() => <Divider />}
        renderItem={({ item: jokeId }) => (
          <JokeItem jokeId={jokeId} onFavPress={handleFavPress} />
        )}
      />
    </SafeAreaView>
  );
};
