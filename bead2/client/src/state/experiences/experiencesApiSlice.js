import { emptyApiSlice } from "../emptyApiSlice";

export const experiencesApiSlice = emptyApiSlice.injectEndpoints({
  reducerPath: "experiencesApi",
  endpoints: (build) => ({
    getExperiences: build.query({
      query: () => "experiences",
    }),
    postExperience: build.mutation({
      query: (data) => ({
        url: `experiences`,
        method: "POST",
        body: data,
      }),
    }),
    patchExperience: build.mutation({
      query: (id, data) => ({
        url: `experiences/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteExperience: build.mutation({
      query: (id) => ({
        url: `experiences/${id}`,
        method: "DELETE",
      }),
    }),
    deleteAllExperiences: build.mutation({
      query: () => ({
        url: `experiences`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetExperiencesQuery,
  usePostExperienceMutation,
  usePatchExperienceMutation,
  useDeleteExperienceMutation,
  useDeleteAllExperiencesMutation,
} = experiencesApiSlice;
