import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import authReducer from './authSlice/authSlice';
import languageReducer from './languageSlice/languageSlice';
import profileReducer from './profileSlice/profileSlice';
import logger from 'redux-logger';
import filterSpecialistsSlice from '@/lib/store/filterSpecialistsSlice/filterSpecialistsSlice';
import specialistsReducer from './filterSpecialistsSlice/specialistsSlice';
import profileEditSlice from './profileEditSlice/profileEditSlice';
import { createProject } from '@/lib/store/createProjectSlice/createProjectSlice';
import companiesSlice from './filterCompaniesSlice/companiesSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  lang: languageReducer,
  filterSpecialists: filterSpecialistsSlice,
  specialists: specialistsReducer,
  companiesSlice: companiesSlice,
  profile: profileReducer,
  profileEditPage: profileEditSlice,
  createProject: createProject,
});

const additionalMiddlewares: Middleware[] = [];

if (process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_REDUX_LOGGER === 'true') {
  additionalMiddlewares.push(logger);
}
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(additionalMiddlewares),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
