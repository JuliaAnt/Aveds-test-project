import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://api.nationalize.io';
const TIMEOUT = 5000;

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  return api;
};