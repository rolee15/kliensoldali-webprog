import { emptyApiSlice } from "../emptyApiSlice";

export const applicantsApiSlice = emptyApiSlice.injectEndpoints({
  reducerPath: "applicantsApi",
  endpoints: (build) => ({
    postApplication: build.mutation({
      query: (data) => ({
        url: `applicants`,
        method: "POST",
        body: data,
      }),
    }),
    deleteApplication: build.mutation({
      query: (jobId) => ({
        url: `applicants?jobId=${jobId}`,
        method: "DELETE",
      }),
    }),
    getApplicationsByJobId: build.query({
      query: (jobId) => `applicants?jobId=${jobId}`,
    }),
    getApplicationsByUserId: build.query({
      query: (userId) => `applicants?userId=${userId}`,
    }),
  }),
});

export const {
  usePostApplicationMutation,
  useDeleteApplicationMutation,
  useGetApplicationsByJobIdQuery,
  useGetApplicationsByUserIdQuery,
} = applicantsApiSlice;
