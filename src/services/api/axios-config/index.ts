import axios from 'axios';
import { responseInterceptor, errorInterceptor } from './interceptors';

const api_url = process.env.APP_URL;
const api_port = process.env.APP_URL;

const Api = axios.create({
  baseURL: `${api_url}:${api_port}`,
});

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
);

export { Api };
