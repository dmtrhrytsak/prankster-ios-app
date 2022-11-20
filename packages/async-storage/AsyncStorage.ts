import _AsyncStorage from '@react-native-async-storage/async-storage';

import { AsyncStorageError } from './errors';

export const AsyncStorage = {
  getItem: async <T>(key: string): Promise<T | null> => {
    try {
      const value = await _AsyncStorage.getItem(key);
      return (value ? JSON.parse(value) : null) as T | null;
    } catch (err: any) {
      throw new AsyncStorageError('get', key);
    }
  },
  setItem: async (key: string, value: any): Promise<void> => {
    try {
      await _AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (err: any) {
      throw new AsyncStorageError('set', key);
    }
  },
};
