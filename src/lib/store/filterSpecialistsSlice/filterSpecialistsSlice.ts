import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Specialist {
  favorites: boolean;
  direction: string;
  rate: string;
  priceMax: string;
  priceMin: string;
  employmentFormat: string;
  additionally: string;
}
export interface InitialStateType {
  specialization: string[];
  level: string[];
  employmentType: string[];
  professionalSkill: string[];
  keywords: string[];
  readyGo: string[];
  location: string[];
}

const initialState: InitialStateType & Specialist = {
  favorites: false,
  direction: '',
  specialization: [],
  professionalSkill: [],
  level: [],
  employmentType: [],
  keywords: [],
  rate: '',
  location: [],
  readyGo: [],
  priceMax: '',
  priceMin: '',
  employmentFormat: '',
  additionally: '',
};

const slice = createSlice({
  initialState,
  name: 'specialists/slice',
  reducers: {
    additionallyChange: (state: InitialStateType & Specialist, action: PayloadAction<string>) => {
      state.additionally = action.payload;
    },
    employmentFormatUpdate: (state: InitialStateType & Specialist, action: PayloadAction<string>) => {
      state.employmentFormat = action.payload;
    },
    employmentTypeAdd: (state: InitialStateType & Specialist, action: PayloadAction<string>) => {
      if (!state.employmentType.includes(action.payload)) state.employmentType.push(action.payload);
    },
    filterChange: (state: InitialStateType & Specialist, action: PayloadAction<string>) => {
      state.direction = action.payload;
    },
    keywordsChange: (state: InitialStateType & Specialist, action: PayloadAction<string>) => {
      state.keywords.push(action.payload);
    },
    levelChange: (state: InitialStateType & Specialist, action: PayloadAction<string>) => {
      if (!state.level.includes(action.payload)) state.level.push(action.payload);
    },
    locationChange: (state: InitialStateType & Specialist, action: PayloadAction<string>) => {
      if (!state.location.includes(action.payload)) state.location.push(action.payload);
    },
    priceMaxChange: (state: InitialStateType & Specialist, action: PayloadAction<string>) => {
      state.priceMax = action.payload;
    },
    priceMinChange: (state: InitialStateType & Specialist, action: PayloadAction<string>) => {
      state.priceMin = action.payload;
    },
    rateChange: (state: InitialStateType & Specialist, action: PayloadAction<string>) => {
      state.rate = action.payload;
    },
    readyGoState: (state: InitialStateType & Specialist, action: PayloadAction<string>) => {
      if (!state.readyGo.includes(action.payload)) state.readyGo.push(action.payload);
    },
    removeOption: (
      state: InitialStateType & Specialist,
      action: PayloadAction<{ option: keyof InitialStateType; value: string }>,
    ) => {
      state[action.payload.option] = state[action.payload.option].filter((i: string) => i !== action.payload.value);
    },
    specializationsAdd: (state: InitialStateType & Specialist, action: PayloadAction<string>) => {
      if (!state.specialization.includes(action.payload)) state.specialization.push(action.payload);
    },
    changeFavorite: (state: InitialStateType & Specialist, action: PayloadAction<boolean>) => {
      state.favorites = action.payload;
    },
    professionalSkillsChange: (state: InitialStateType & Specialist, action: PayloadAction<string>) => {
      if (!state.professionalSkill.includes(action.payload)) state.professionalSkill.push(action.payload);
    },
  },
});
export const {
  additionallyChange,
  employmentFormatUpdate,
  locationChange,
  rateChange,
  priceMaxChange,
  priceMinChange,
  readyGoState,
  filterChange,
  specializationsAdd,
  levelChange,
  employmentTypeAdd,
  keywordsChange,
  removeOption,
  professionalSkillsChange,
  changeFavorite,
} = slice.actions;
export default slice.reducer;
