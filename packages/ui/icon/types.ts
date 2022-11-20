import { icons } from './icons';

export type IconProps = {
  name: keyof typeof icons;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'filled' | 'outlined';
};
