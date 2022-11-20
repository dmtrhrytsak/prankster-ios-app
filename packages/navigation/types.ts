import { SvgProps } from 'react-native-svg';

export type TabsParamList = {
  Today: undefined;
  History: undefined;
};

export type Tabs = keyof TabsParamList;

export type TabBarIcons = Record<Tabs, React.FC<SvgProps> | React.FC>;
