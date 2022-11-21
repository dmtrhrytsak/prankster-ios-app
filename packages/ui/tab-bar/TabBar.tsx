import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import type {
  BottomTabBarProps,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import type { Route } from '@react-navigation/native';

import { useTheme } from '../../theme/ThemeContext';

import TodayIcon from '../../../assets/icons/Today.svg';
import HistoryIcon from '../../../assets/icons/History.svg';
import { Divider } from '../divider/Divider';

const tabBarIcons = {
  Today: TodayIcon,
  History: HistoryIcon,
};

const renderIcon = (route: Route<string>, color: string) => {
  const Icon = tabBarIcons[route.name as keyof typeof tabBarIcons];
  return <Icon stroke={color} strokeWidth={2} style={{ marginBottom: 4 }} />;
};

const renderLabel = (
  route: Route<string>,
  color: string,
  options: BottomTabNavigationOptions
) => {
  const label =
    options.tabBarLabel !== undefined
      ? (options.tabBarLabel as string)
      : options.title !== undefined
      ? options.title
      : route.name;

  return (
    <Text
      style={{
        fontSize: 12,
        fontWeight: 'bold',
        color,
      }}
    >
      {label}
    </Text>
  );
};

export const TabBar = (props: BottomTabBarProps) => {
  const { state, navigation, descriptors } = props;
  const {
    theme: { colors },
  } = useTheme();

  return (
    <View
      style={{
        paddingHorizontal: 112,
        height: 102,
        backgroundColor: colors.tabBar,
      }}
    >
      <Divider placement="top" />
      <SafeAreaView
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const focused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!focused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={focused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              activeOpacity={0.8}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {renderIcon(route, focused ? colors.primary : colors.inactive)}
              {renderLabel(
                route,
                focused ? colors.primary : colors.inactive,
                options
              )}
            </TouchableOpacity>
          );
        })}
      </SafeAreaView>
    </View>
  );
};
