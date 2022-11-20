import { ContextUtils } from '../utils/ContextUtils';
import type { Theme } from './types';

export type ThemeContext = {
  theme: Theme;
};

export const [useTheme, ThemeProvider] = ContextUtils.createCtx<ThemeContext>();
