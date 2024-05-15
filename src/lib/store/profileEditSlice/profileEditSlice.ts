import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface EditPageState {
  page: string;
  openModal: boolean;
}

const initialState: EditPageState = { page: '', openModal: false };

const profileEditSlice = createSlice({
  name: 'editPage',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
    },
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.openModal = action.payload;
    },
  },
});

export const { setPage, setOpen } = profileEditSlice.actions;

export default profileEditSlice.reducer;
