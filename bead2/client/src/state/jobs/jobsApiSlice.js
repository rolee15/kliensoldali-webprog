import { emptyApiSlice } from "../emptyApiSlice";

export const jobsApiSlice = emptyApiSlice.injectEndpoints({
  reducerPath: "jobsApi",
  endpoints: (build) => ({
    getAllJobs: build.query({
      query: () => "jobs",
    }),
    getJobById: build.query({
      query: (id) => `jobs/${id}`,
    }),
    getFilteredJobs: build.query({
      query: (filters) => {
        const queryString = Object.entries(filters)
          .filter(([_, value]) => value !== null)
          .map(([key, value]) => `${key}=${value}`)
          .join("&");
        return `/?${queryString}`;
      },
    }),
    postJob: build.mutation({
      query: (body) => ({
        url: "jobs",
        method: "POST",
        body: body,
      }),
    }),
    patchJob: build.mutation({
      query: (id, body) => ({
        url: `jobs/${id}`,
        method: "PATCH",
        body: body,
      }),
    }),
    deleteJob: build.mutation({
      query: (id) => ({
        url: `jobs/${id}`,
        method: "DELETE",
      }),
    }),
    deleteAllJobs: build.mutation({
      query: () => ({
        url: "jobs",
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllJobsQuery,
  useGetJobByIdQuery,
  useGetFilteredJobsQuery,
  usePostJobMutation,
  usePatchJobMutation,
  useDeleteJobMutation,
  useDeleteAllJobsMutation,
} = jobsApiSlice;
