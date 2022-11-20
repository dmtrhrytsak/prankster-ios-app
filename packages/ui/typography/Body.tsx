import { Text } from 'react-native';

import type { BodyProps } from './types';
import { useTheme } from '../../theme/ThemeContext';

export const Body = ({ children, style, size = 'md', ...props }: BodyProps) => {
  const {
    theme: { typography },
  } = useTheme();

  return (
    <Text style={[style, typography.body[size]]} {...props}>
      {children}
    </Text>
  );
};
