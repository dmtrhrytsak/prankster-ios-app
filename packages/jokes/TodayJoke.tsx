import { View, ActivityIndicator } from 'react-native';

import { Icon } from '../ui/icon/Icon';
import { IconButton } from '../ui/buttons/IconButton';
import { Body } from '../ui/typography/Body';
import { Container } from '../ui/container/Container';
import { Center } from '../ui/center/Center';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { JokeActions } from './JokeActions';
import { JokesUtils } from './JokesUtils';
import { JokesSelector } from './JokesSelector';

export const TodayJoke = () => {
  const todayJoke = useAppSelector(JokesSelector.selectTodayJoke);
  const loading = useAppSelector(JokesSelector.selectLoading);
  const error = useAppSelector(JokesSelector.selectError);

  const dispatch = useAppDispatch();

  if (error) {
    return (
      <Center>
        <Body>Sorry, but today's joke takes a break :(</Body>
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
            onPress={() =>
              dispatch(JokeActions.likeJokeRequested(todayJoke.id))
            }
          />
        </View>
      </View>
    </Container>
  );
};
