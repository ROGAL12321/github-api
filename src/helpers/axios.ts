import axios, { AxiosRequestConfig } from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const get = (url: string, params?: AxiosRequestConfig) => instance.get(url, params).then(r => r.data);