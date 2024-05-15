import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface LangState {
  lang: string;
}

const initialState: LangState = { lang: 'ru' };

const languageSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = languageSlice.actions;

export default languageSlice.reducer;
