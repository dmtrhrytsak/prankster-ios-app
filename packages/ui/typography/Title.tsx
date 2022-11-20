import { Text } from 'react-native';

import type { TitlePros } from './types';
import { useTheme } from '../../theme/ThemeContext';

export const Title = ({
  children,
  style,
  size = 'base',
  ...props
}: TitlePros) => {
  const {
    theme: { typography },
  } = useTheme();

  return (
    <Text style={[style, typography.title[size]]} {...props}>
      {children}
    </Text>
  );
};
