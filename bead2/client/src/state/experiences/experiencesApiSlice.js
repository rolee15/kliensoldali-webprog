import { emptyApiSlice } from "../emptyApiSlice";

export const experiencesApiSlice = emptyApiSlice.injectEndpoints({
  reducerPath: "experiencesApi",
  endpoints: (build) => ({
    getExperiences: build.query({
      query: () => "experiences",
      providesTags: (result) => result?.data?.map(({ id }) => ({ type: "Experiences", id })) || ["Experiences"],
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
      invalidatesTags: (result, error, id) => [{ type: "Experiences", id }].concat(result ? [] : ["Experiences"]),
    }),
    deleteExperience: build.mutation({
      query: (id) => ({
        url: `experiences/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Experiences", id }].concat(result ? [] : ["Experiences"]),
    }),
    deleteAllExperiences: build.mutation({
      query: () => ({
        url: `experiences`,
        method: "DELETE",
      }),
      invalidatesTags: ["Experiences"],
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
