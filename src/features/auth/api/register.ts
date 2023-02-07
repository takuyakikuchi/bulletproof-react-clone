import { axiosInstance } from "@/lib/axios";
import { RegisterCredentials, UserResponse } from "@/features/auth";

export const registerWithEmailAndPassword = (data: RegisterCredentials): Promise<UserResponse> => {
  return axiosInstance.post('/auth/register', data);
};  
