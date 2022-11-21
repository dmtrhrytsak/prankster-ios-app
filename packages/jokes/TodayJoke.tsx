import { View } from 'react-native';

import { Icon } from '../ui/icon/Icon';
import { IconButton } from '../ui/buttons/IconButton';
import { Body } from '../ui/typography/Body';
import { JokesUtils } from './JokesUtils';
import { useJokesActions } from './useJokesActions';
import { useJokes } from './JokesContext';
import { Container } from '../ui/container/Container';

export const TodayJoke = () => {
  const {
    state: { jokes, todayJokeId },
  } = useJokes();
  const { likeJoke } = useJokesActions();

  const todayJoke = jokes.entities[todayJokeId];

  return (
    <Container>
      <View style={{ flex: 1, justifyContent: 'center' }}>
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
    </Container>
  );
};
