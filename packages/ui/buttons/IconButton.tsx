import { type StyleProp, Pressable, ViewStyle } from 'react-native';

import { useTheme } from '../../theme/ThemeContext';
import type { IconButtonProps } from './types';

export const IconButton = ({
  children,
  style,
  size = 'md',
  active = false,
  icon,
  ...rest
}: IconButtonProps) => {
  const {
    theme: { colors, rounded },
  } = useTheme();

  const sizes = {
    sm: { width: 32, height: 32 },
    md: { width: 48, height: 48 },
    lg: { width: 64, height: 64 },
  };

  return (
    <Pressable
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: rounded.full,
          ...sizes[size],
          backgroundColor: active ? colors.primary : colors.secondary,
        },
        style as StyleProp<ViewStyle>,
      ]}
      {...rest}
    >
      {icon({
        size,
        variant: active ? 'filled' : 'outlined',
      })}
    </Pressable>
  );
};
