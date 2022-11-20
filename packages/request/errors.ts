import { MyError } from '../errors/MyError';
import type { HTTPMethod } from './types';

export class RequestError extends MyError {
  constructor(url: string, method: HTTPMethod, status: number) {
    super(`Request Error: ${method} - ${url} | [${status}]`);
  }
}
