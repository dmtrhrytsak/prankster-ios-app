import { View, ActivityIndicator } from 'react-native';

import { Body } from '../ui/typography/Body';
import { Icon } from '../ui/icon/Icon';
import { IconButton } from '../ui/buttons/IconButton';
import { JokesUtils } from './JokesUtils';
import { useJokes } from './JokesContext';
import { useJokesActions } from './useJokesActions';

export const TodayJoke = () => {
  const {
    state: { loading, error, jokes, todayJokeId },
  } = useJokes();
  const { likeJoke } = useJokesActions();

  const todayJoke = jokes.entities[todayJokeId];

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Body>Something went wrong</Body>;
  }

  if (!todayJoke) {
    return null;
  }

  return (
    <View>
      <Body size="lg" style={{ marginBottom: 16 }}>
        {JokesUtils.makeJokeText(todayJoke)}
      </Body>
      <IconButton
        size="lg"
        active={todayJoke.liked}
        icon={(props) => <Icon name="Fav" {...props} />}
        onPress={() => likeJoke(todayJokeId)}
      />
    </View>
  );
};
