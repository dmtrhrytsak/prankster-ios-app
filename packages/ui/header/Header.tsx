import { View, SafeAreaView } from 'react-native';

import type { HeaderProps } from './types';
import { Container } from '../container/Container';
import { Divider } from '../divider/Divider';
import { Title } from '../typography/Title';

export const Header = ({ route }: HeaderProps) => {
  return (
    <SafeAreaView>
      <View style={{ height: 136 }}>
        <Container>
          <Title style={{ marginTop: 64 }}>{route.name}</Title>
          <Divider />
        </Container>
      </View>
    </SafeAreaView>
  );
};
