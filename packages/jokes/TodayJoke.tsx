import { View } from 'react-native';

import { Icon } from '../ui/icon/Icon';
import { Center } from '../ui/center/Center';
import { IconButton } from '../ui/buttons/IconButton';
import { Body } from '../ui/typography/Body';
import { JokesUtils } from './JokesUtils';
import { useJokesActions } from './useJokesActions';
import { useJokes } from './JokesContext';

export const TodayJoke = () => {
  const {
    state: { jokes, todayJokeId },
  } = useJokes();
  const { likeJoke } = useJokesActions();

  const todayJoke = jokes.entities[todayJokeId];

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
