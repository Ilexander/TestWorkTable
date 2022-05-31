import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  status: string;
}

const initialState: ModalState = {
  status: 'invoice',
};

export const modalState = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeModal: (state, action: PayloadAction<string>) => {
      state.status = action.payload
    },
  },
});

export const { changeModal } = modalState.actions;

export default modalState.reducer;
