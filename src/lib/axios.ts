import axios, { InternalAxiosRequestConfig} from 'axios';
import { API_URL } from '@/config';
import { storage } from '@/utils/storage';

export const axiosInstance = axios.create({
  baseURL: API_URL,
});

/**
 * A function to add the Authorization header to all axios requests.
 * Added information is:
 * - A token taken from the storage used to authenticate the user.
 * - A header to tell the server to send the response in JSON format.
 */
const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = storage.getToken();
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  // This tells the server to send the response in JSON format.
  config.headers.Accept = 'application/json';
  return config;
};

axiosInstance.interceptors.request.use(authRequestInterceptor);

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // TODO: Add a notification.
    // const message = error.response?.data?.message || error.message;
    // useNotificationStore.getState().addNotification({
    //   type: 'error',
    //   title: 'Error',
    //   message,
    // });

    return Promise.reject(error);
  }
);
