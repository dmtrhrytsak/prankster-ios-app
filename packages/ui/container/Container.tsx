import { PropsWithChildren } from 'react';
import { View } from 'react-native';

import { ContainerProps } from './types';

export const Container = ({
  children,
  full = true,
  center = false,
}: PropsWithChildren<ContainerProps>) => {
  return (
    <View
      style={{
        paddingHorizontal: 24,
        flex: full ? 1 : 0,
        ...(center && { alignItems: 'center', justifyContent: 'center' }),
      }}
    >
      {children}
    </View>
  );
};
