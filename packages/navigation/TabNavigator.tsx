import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import type { TabsParamList } from './types';
import { Header } from '../ui/header/Header';
import { TabBar } from '../ui/tab-bar/TabBar';
import { TodayScreen } from '../screens/TodayScreen';
import { HistoryScreen } from '../screens/HistoryScreen';

const Tab = createBottomTabNavigator<TabsParamList>();

export const TabNavigator = () => (
  <Tab.Navigator
    tabBar={(props) => <TabBar {...props} />}
    screenOptions={{ header: (props) => <Header {...props} /> }}
  >
    <Tab.Screen name="Today" component={TodayScreen} />
    <Tab.Screen name="History" component={HistoryScreen} />
  </Tab.Navigator>
);
