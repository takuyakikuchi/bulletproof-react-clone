import { axiosInstance } from "@/lib/axios";
import { RegisterCredentials, UserResponse } from "@/features/auth";

export const registerWithEmailAndPassword = (data: RegisterCredentials) => {
  return axiosInstance.post<UserResponse>('/auth/register', data);
};  
