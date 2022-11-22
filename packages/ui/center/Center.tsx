import { View } from 'react-native';

import type { CenterProps } from './types';

export const Center = ({ children }: CenterProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {children}
    </View>
  );
};
