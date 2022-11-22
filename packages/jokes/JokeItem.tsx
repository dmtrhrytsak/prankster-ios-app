import { View } from 'react-native';

import { Body } from '../ui/typography/Body';
import { IconButton } from '../ui/buttons/IconButton';
import { Icon } from '../ui/icon/Icon';
import type { JokeItemProps } from './types';
import { JokesUtils } from './JokesUtils';
import { Divider } from '../ui/divider/Divider';

// I figured out too late that it probably should have been a generic ListItem
// Still learning app development...
export const JokeItem = ({ joke, onFavPress }: JokeItemProps) => {
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
        onPress={onFavPress}
      />
      <Divider />
    </View>
  );
};
