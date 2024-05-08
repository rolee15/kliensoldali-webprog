import { configureStore } from "@reduxjs/toolkit";
import graphiLogicSlice from "./graphiLogicSlice";
import { authReducer } from "./auth/authSlice";
import { authApiSlice } from "./auth/authApiSlice";

export const store = configureStore({
  reducer: {
    graphilogic: graphiLogicSlice.reducer,
    auth: authReducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer
  },
});
