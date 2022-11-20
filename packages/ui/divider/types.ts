import { View } from 'react-native';

export type DividerProps = {
  placement?: 'bottom' | 'top';
} & React.ComponentProps<typeof View>;
