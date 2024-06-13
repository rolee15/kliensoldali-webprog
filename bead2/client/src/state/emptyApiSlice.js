import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3030/";

export const emptyApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: () => ({}),
});
