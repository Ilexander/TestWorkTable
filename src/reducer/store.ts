import { configureStore } from "@reduxjs/toolkit";
import dataObjectSlice from "./dataSlice";
import modalStatus from "./modalSlice";
import formData from "./formSlice";

export const store = configureStore({
  reducer: {
    formData,
    dataObject: dataObjectSlice,
    modalStatus,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
