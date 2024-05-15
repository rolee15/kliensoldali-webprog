import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3030";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const graphiLogicsApiSlice = createApi({
  reducerPath: "graphilogicsApi",
  baseQuery,
  endpoints: (builder) => ({
    getGraphiLogics: builder.query({
      query: () => ({ url: "puzzles" }),
      transformResponse: (response) => response.data,
    }),
    getSolutions: builder.query({
      query: () => ({ url: "solutions" }),
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetGraphiLogicsQuery, useGetSolutionsQuery } =
  graphiLogicsApiSlice;
