import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Header } from '../ui/header/Header';
import { TabBar } from '../ui/tab-bar/TabBar';
import type { HomeTabParams } from './types';
import { TodayJoke } from '../jokes/TodayJoke';
import { JokeHistory } from '../jokes/JokeHistory';

const Tab = createBottomTabNavigator<HomeTabParams>();

export const Home = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ header: (props) => <Header {...props} /> }}
    >
      <Tab.Screen name="Today" component={TodayJoke} />
      <Tab.Screen name="History" component={JokeHistory} />
    </Tab.Navigator>
  );
};
