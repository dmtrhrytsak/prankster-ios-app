import { View } from 'react-native';

import type { DividerProps } from './types';
import { useTheme } from '../../theme/ThemeContext';

export const Divider = ({
  style,
  placement = 'bottom',
  ...props
}: DividerProps) => {
  const {
    theme: {
      colors: { divider },
    },
  } = useTheme();

  return (
    <View
      style={[
        {
          position: 'absolute',
          [placement]: 0,
          left: 0,
          right: 0,
          height: 1,
          backgroundColor: divider,
        },
        style,
      ]}
      {...props}
    />
  );
};
