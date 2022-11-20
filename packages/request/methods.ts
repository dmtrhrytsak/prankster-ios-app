import { request } from './request';

export const get = async <T>(url: string) => request<T>(url);
