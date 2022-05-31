import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormDataType } from "./formSlice";

export interface DataObjectState {
  data: FormDataType[];
}

const initialState: DataObjectState = {
  data: [],
};

export const dataObjectSlice = createSlice({
  name: "dataObject",
  initialState,
  reducers: {
    addData(state, action: PayloadAction<FormDataType>) {
      state.data = state.data.concat(action.payload);
    },
    removeData(state, action: PayloadAction<string | boolean>) {
      state.data = state.data.filter((item) => {
        return item.name !== action.payload;
      });
    },
  },
});

export const { addData, removeData } = dataObjectSlice.actions;

export default dataObjectSlice.reducer;
