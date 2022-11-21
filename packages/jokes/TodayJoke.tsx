import { View, ActivityIndicator } from 'react-native';

import { Icon } from '../ui/icon/Icon';
import { Center } from '../ui/center/Center';
import { IconButton } from '../ui/buttons/IconButton';
import { useTodayJoke } from './useTodayJoke';
import { Body } from '../ui/typography/Body';
import { JokesUtils } from './JokesUtils';
import { useJokesActions } from './useJokesActions';

export const TodayJoke = () => {
  const { loading, error, todayJoke } = useTodayJoke();
  const { likeJoke } = useJokesActions();

  if (error) {
    return (
      <Center>
        <Body>Something went wrong</Body>
      </Center>
    );
  }

  if (loading || !todayJoke) {
    return (
      <Center>
        <ActivityIndicator />
      </Center>
    );
  }

  return (
    <Center>
      <View style={{ padding: 24 }}>
        <View>
          <Body size="lg" style={{ marginBottom: 16 }}>
            {JokesUtils.makeJokeText(todayJoke)}
          </Body>
          <IconButton
            size="lg"
            active={todayJoke.liked}
            icon={(props) => <Icon name="Fav" {...props} />}
            onPress={() => likeJoke(todayJoke.id)}
          />
        </View>
      </View>
    </Center>
  );
};
