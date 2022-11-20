import { useMemo, useReducer } from 'react';

import { ContextUtils } from '../utils/ContextUtils';
import type { JokesContextType } from './types';
import { jokesReducer } from './jokesReducer';

export const [useJokes, JokesContextProvider] =
  ContextUtils.createCtx<JokesContextType>();

export const JokesProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(jokesReducer, {
    loading: false,
    error: null,
    jokes: { ids: [], entities: {} },
    todayJokeId: 0,
  });

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <JokesContextProvider value={value}>{children}</JokesContextProvider>;
};
