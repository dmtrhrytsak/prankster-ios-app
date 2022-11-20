import { StyleSheet } from 'react-native';

export const typography = {
  title: StyleSheet.create({
    base: {
      fontFamily: 'Inter_700Bold',
      fontSize: 36,
      lineHeight: 48,
    },
  }),
  body: StyleSheet.create({
    md: {
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      lineHeight: 26,
    },
    lg: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 24,
      lineHeight: 38,
    },
  }),
};
