import { useTheme } from '../../theme/ThemeContext';
import type { IconProps } from './types';
import { icons } from './icons';

export const Icon = ({
  name,
  size = 'md',
  variant = 'outlined',
}: IconProps) => {
  const {
    theme: {
      colors: { primary },
    },
  } = useTheme();

  const Icon = icons[name];

  const sizes = {
    sm: { width: 16, height: 16 },
    md: { width: 24, height: 24 },
    lg: { width: 32, height: 32 },
  };

  return (
    <Icon
      fill={variant === 'filled' ? '#fff' : 'none'}
      stroke={variant === 'filled' ? 'none' : primary}
      strokeWidth={variant === 'filled' ? 'none' : 2}
      {...sizes[size]}
    />
  );
};
