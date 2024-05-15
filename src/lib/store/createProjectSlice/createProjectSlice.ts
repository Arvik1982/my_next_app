import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISpecialists } from '../types';

export interface InitialStateCreateProject {
  project: {
    nameProject: string;
    authors: ISpecialists[];
    projectCover: File | null;
    link: string;
    checked: boolean;
    keyWords: string[];
  }[];
}

const initialState: InitialStateCreateProject = {
  project: [],
};
const slice = createSlice({
  initialState,
  name: 'createProject',
  reducers: {
    changeName: (
      state: InitialStateCreateProject,
      action: PayloadAction<{
        nameProject: string;
        authors: ISpecialists[];
        projectCover: File | null;
        link: string;
        checked: boolean;
        keyWords: string[];
      }>,
    ) => {
      const newProject = {
        nameProject: action.payload.nameProject,
        authors: action.payload.authors,
        projectCover: action.payload.projectCover,
        link: action.payload.link,
        checked: action.payload.checked,
        keyWords: action.payload.keyWords,
      };

      return {
        ...state,
        project: [...state.project, newProject],
      };
    },
  },
});
export const createProject = slice.reducer;
export const { changeName } = slice.actions;
