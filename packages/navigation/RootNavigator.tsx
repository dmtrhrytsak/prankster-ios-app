import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { TabNavigator } from './TabNavigator';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

export const RootNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <TabNavigator />
    </NavigationContainer>
  );
};
