import { configureStore } from "@reduxjs/toolkit";
import salaryCalculatorSlice from "./salaryCalculatorSlice";

export const store = configureStore({
    reducer: salaryCalculatorSlice.reducer,
});