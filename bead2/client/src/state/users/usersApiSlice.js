import { emptyApiSlice } from "../emptyApiSlice";

export const usersApiSlice = emptyApiSlice.injectEndpoints({
  reducerPath: "usersApi",
  endpoints: (build) => ({
    getUserById: build.query({
      query: (id) => `users/${id}`,
    }),
    register: build.mutation({
      query: (body) => {
        return {
          url: "users",
          method: "POST",
          body,
        };
      },
    }),
    login: build.mutation({
      query: (body) => {
        return {
          url: "authentication",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useGetUserByIdQuery, useRegisterMutation, useLoginMutation } = usersApiSlice;
