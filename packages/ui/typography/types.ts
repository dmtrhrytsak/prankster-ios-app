import { Text } from 'react-native';

export type BodyProps = {
  children: React.ReactNode;
  size?: 'md' | 'lg';
} & React.ComponentProps<typeof Text>;

export type TitlePros = {
  children: React.ReactNode;
  size?: 'base';
} & React.ComponentProps<typeof Text>;
