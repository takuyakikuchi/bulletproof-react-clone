import { axiosInstance } from "@/lib/axios";
import { LoginCredentials, UserResponse } from "@/features/auth";

export const loginWithEmailAndPassword = (data: LoginCredentials) => {
  return axiosInstance.post<UserResponse>('/auth/login', data);
};  
