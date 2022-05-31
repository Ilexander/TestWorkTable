import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormDataType {
  company: string | boolean;
  name: string | boolean;
  additional: string | boolean;
  street: string | boolean;
  country: string | boolean;
  postal_code: string | boolean;
  bank_name: string | boolean;
  iban: string | boolean;
  bic: string | boolean;
  fax: string | boolean;
  email: string | boolean;
  birthday: string | boolean;
  homepage: string | boolean;
}

export interface FormDataState {
  data: FormDataType;
}

const initialState: FormDataState = {
  data: {
    name: false,
    company: false,
    additional: false,
    street: false,
    country: false,
    postal_code: false,
    iban: false,
    bic: false,
    bank_name: false,
    fax: false,
    email: false,
    birthday: false,
    homepage: false,
  },
};

export const formObjectSlice = createSlice({
  name: "formObject",
  initialState,
  reducers: {
    addInfo(state, action: PayloadAction<object>) {
      state.data = Object.assign({}, state.data, action.payload);
    },
  },
});

export const { addInfo } = formObjectSlice.actions;

export default formObjectSlice.reducer;
