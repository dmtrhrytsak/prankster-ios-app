import { FlatList, View, ActivityIndicator } from 'react-native';

import { Divider } from '../ui/divider/Divider';
import { Center } from '../ui/center/Center';
import { Body } from '../ui/typography/Body';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { JokeActions } from './JokeActions';
import { JokesSelector } from './JokesSelector';
import type { Joke } from './types';
import { JokeItem } from './JokeItem';

export const JokeHistory = () => {
  const jokeHistory = useAppSelector(JokesSelector.selectJokeHistory);
  const loading = useAppSelector(JokesSelector.selectLoading);
  const error = useAppSelector(JokesSelector.selectError);

  const dispatch = useAppDispatch();

  const handleFavPress = (jokeId: Joke['id']) => {
    dispatch(JokeActions.likeJokeRequested(jokeId));
  };

  if (loading) {
    return (
      <Center>
        <ActivityIndicator />
      </Center>
    );
  }

  if (error) {
    return (
      <Center>
        <Body>Sorry, but your history doesn't want to load :(</Body>
      </Center>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={jokeHistory}
        keyExtractor={(joke) => String(joke.id)}
        renderItem={({ item }) => (
          <JokeItem joke={item} onFavPress={() => handleFavPress(item.id)} />
        )}
      />
    </View>
  );
};
