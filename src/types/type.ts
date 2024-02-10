export interface IUser {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IData {
  data: IUser[];
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface ErrorResponse {
  success: false;
  error?: string;
}
interface SuccessResponse<T> {
  success: true;
  data: T;
}

export type Response<T = never> = ErrorResponse | SuccessResponse<T>;

export function isSuccessResponse<T>(
  res: Response<T>
): res is SuccessResponse<T> {
  return res.success;
}
