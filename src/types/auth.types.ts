export interface Credentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user?: UserData;
}

export interface UserData {
  id: string;
  email: string;
  // Add other user fields as needed
}

export interface ErrorResponse {
  message?: string;
}

export interface ApiError {
  message: string;
  status?: number;
}
