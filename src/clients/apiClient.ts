/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from 'axios';
import Cookies from 'js-cookie';

export const $api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  timeout: 100000,
});

export const $authApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  timeout: 100000,
});

const authInterceptor = (config: any) => {
  const token = Cookies.get('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

$authApi.interceptors.request.use(authInterceptor);
