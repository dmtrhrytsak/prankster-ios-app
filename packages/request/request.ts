import type { HTTPMethod } from './types';
import { RequestError } from './errors';

export const request = async <T>(url: string, options?: RequestInit) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new RequestError(
        url,
        (options?.method ?? 'GET') as HTTPMethod,
        response.status
      );
    }
    const data = await response.json();
    return data as T;
  } catch (err) {
    throw new RequestError(url, (options?.method ?? 'GET') as HTTPMethod, 500);
  }
};
