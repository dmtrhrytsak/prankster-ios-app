import { PropsWithChildren } from 'react';
import { View } from 'react-native';

import { ContainerProps } from './types';

export const Container = ({
  children,
  style,
}: PropsWithChildren<ContainerProps>) => {
  return (
    <View style={[style, { flex: 1, paddingHorizontal: 24 }]}>{children}</View>
  );
};
