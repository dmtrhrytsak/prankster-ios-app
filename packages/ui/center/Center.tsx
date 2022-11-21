import { View } from 'react-native';

import type { CenterProps } from './types';

export const Center = ({ children }: CenterProps) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {children}
    </View>
  );
};
