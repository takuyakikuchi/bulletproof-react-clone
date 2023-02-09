import { axiosInstance } from '@/lib/axios';

export const getUser = () => {
  return axiosInstance.get('/auth/me');
};
