import { PressableProps } from 'react-native';

export type IconButtonProps = {
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
  icon: (props: any) => JSX.Element;
} & PressableProps;
