import { View } from 'react-native';

import { Body } from '../ui/typography/Body';
import { IconButton } from '../ui/buttons/IconButton';
import { Icon } from '../ui/icon/Icon';
import type { JokeItemProps } from './types';
import { useJokes } from './JokesContext';
import { JokesUtils } from './JokesUtils';

export const JokeItem = ({ jokeId, onFavPress }: JokeItemProps) => {
  const {
    state: { jokes },
  } = useJokes();

  const joke = jokes.entities[jokeId];

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 24,
      }}
    >
      <Body style={{ flex: 1 }}>{JokesUtils.makeJokeText(joke)}</Body>
      <IconButton
        active={joke.liked}
        icon={(props) => <Icon name="Fav" {...props} />}
        style={{ marginLeft: 20 }}
        onPress={() => onFavPress(jokeId)}
      />
    </View>
  );
};
