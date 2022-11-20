import { View } from 'react-native';

import type { HeaderProps } from './types';
import { Container } from '../container/Container';
import { Divider } from '../divider/Divider';
import { Title } from '../typography/Title';
import { useTheme } from '../../theme/ThemeContext';

export const Header = ({ route }: HeaderProps) => {
  const {
    theme: { colors },
  } = useTheme();

  return (
    <View style={{ height: 180, backgroundColor: colors.header }}>
      <Container>
        <Title style={{ top: 108 }}>{route.name}</Title>
        <Divider style={{ top: 180 }} />
      </Container>
    </View>
  );
};
