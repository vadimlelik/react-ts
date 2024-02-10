import { postSlice } from "./postSlice";
export const postReducer = postSlice.reducer;
export const postReducerPath = postSlice.reducerPath;
export const postMiddleware = postSlice.middleware;
export const { useGetPostsQuery, useDeletePostMutation } = postSlice;
