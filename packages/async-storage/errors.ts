import { MyError } from '../errors/MyError';

export class AsyncStorageError extends MyError {
  constructor(op: 'get' | 'set' | 'remove', key: string) {
    super(`Async Storage Error: [${op}] - ${key}`);
  }
}

export function isAsyncStorageError(err: unknown): err is AsyncStorageError {
  return err instanceof AsyncStorageError;
}
