import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3030/";

export const emptyApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().users.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: () => ({}),
});
