import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Response } from "../../types/type";
import { IPost } from "../../types/type";

// interface IPostState {
//   posts?: IPost[];
// }

// const initialState: IPostState = {
//   posts: [],
// };

export const postSlice = createApi({
  reducerPath: "posts",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005/",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], void>({
      query() {
        return {
          url: "posts",
        };
      },
      providesTags: ["Post"],
    }),
    deletePost: builder.mutation<Response<IPost[]>, IPost["id"]>({
      query(id) {
        return {
          url: `posts/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Post"],
    }),
  }),
});
