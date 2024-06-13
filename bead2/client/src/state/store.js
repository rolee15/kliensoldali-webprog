import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/usersSlice";
import { usersApiSlice } from "./users/usersApiSlice";
import { jobsApiSlice } from "./jobs/jobsApiSlice";
import { applicantsApiSlice } from "./applicants/applicantsApiSlice";
import { experiencesApiSlice } from "./experiences/experiencesApiSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
    [jobsApiSlice.reducerPath]: jobsApiSlice.reducer,
    [applicantsApiSlice.reducerPath]: applicantsApiSlice.reducer,
    [experiencesApiSlice.reducerPath]: experiencesApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersApiSlice.middleware,
      jobsApiSlice.middleware,
      applicantsApiSlice.middleware,
      experiencesApiSlice.middleware,
    ),
});
