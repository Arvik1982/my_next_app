import { $api } from '@/clients/apiClient';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ISpecialists, ISpecQueryParam } from '../types';

// export interface InitialSpecialistsState {
// professionalSkills: string[];
// keywords: string[];
// level: string;
// employmentType: string;
// id: number;
// direction: string;
// favorites: boolean;
// avatar: string;
// userName: string;
// price: number;
// currency: string;
// ready: boolean;
// post: string;
// comment: number;
// expert: boolean;
// location: string;
// readyGo: string;
// nick: string;
// projects: {
//   id: number;
//   src: string;
// }[];
// }

interface InitialSpecialistsState {
  isLoading: boolean;
  specialists: ISpecialists[];
}

const initialState: InitialSpecialistsState = {
  isLoading: false,
  specialists: [],
  //   professionalSkills: [],
  //   keywords: ['UI/UX', 'HTML5', 'CSS3', 'Дизайнер интерфейсов', 'Figma'],
  //   level: '',
  //   readyGo: 'Не ищу работу',
  //   location: 'Москва',
  //   currency: '$',
  //   employmentType: 'Полная занятость',
  //   id: 1,
  //   direction: 'Дизайн',
  //   favorites: true,
  //   avatar: '/images/userpic.svg',
  //   userName: 'Даниил Церр',
  //   price: 1500,
  //   ready: true,
  //   post: 'Fashion дизайнер',
  //   comment: 3,
  //   expert: true,
  //   nick: 'Google.com',
  //   projects: [
  //     {
  //       id: 1,
  //       src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRrfbA0BN2TzUGKsrt6eRMS3ScZoL9o1cCu4mlXT8H55k35V2XX',
  //     },
  //     {
  //       id: 2,
  //       src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTAA6BTaZ8NrzW6EmRqEQ55D9t-TunfCcevTXvK9Ubva8QlJaUw',
  //     },
  //     {
  //       id: 3,
  //       src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS2U7-OR0on7WMotNL64myhj3fffHM-bxgUanEmvpYv1hZR-pai',
  //     },
  //     {
  //       id: 4,
  //       src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQj4yvU21v1hwqKWAInEvGi8MRd6aS4J9jb7ru2SLh4v8OK1S_T',
  //     },
  //   ],
  // },
  // {
  //   nick: 'Google.com',
  //   professionalSkills: ['Figma'],
  //   keywords: [],
  //   level: '',
  //   readyGo: 'Ищу работу',
  //   location: 'Санкт-Петербург',
  //   currency: '₽',
  //   employmentType: 'Проектная работа',
  //   id: 2,
  //   direction: 'Маркетинг',
  //   favorites: false,
  //   avatar: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTN9CLUmA54MfLyc2qBRHEOZgI6i61SjYZz9K7S6r5IVmBE1WBL',
  //   userName: 'Сергей Долгов',
  //   price: 2500,
  //   ready: false,
  //   post: 'Копирайтер',
  //   comment: 3,
  //   expert: false,
  //   projects: [
  //     {
  //       id: 5,
  //       src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSGVKEdegsAZuK4CLxFGoc2iGilZ6Sqh_BQB2tRE2yt0XlUMDvK',
  //     },
  //     {
  //       id: 6,
  //       src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6IWnvlaQXwE23vUMVNcvzLxk0UZ1iXQO87IN78pPtWi9p7P3_',
  //     },
  //     {
  //       id: 7,
  //       src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRtTFskBzUmSxAJ1CLX6F_JkGt3ztUmSnPtOxJl1hUvO-o0XA4r',
  //     },
  //     {
  //       id: 8,
  //       src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTTzluzYWov395gBa7uCOeo1yfHzfJnWIldNMmRG6W5mFEekgxL',
  //     },
  //   ],
  // },
  // {
  //   nick: 'Google.com',
  //   professionalSkills: [],
  //   keywords: [],
  //   level: '',
  //   readyGo: 'Ищу работу',
  //   location: 'Санкт-Петербург',
  //   currency: '₽',
  //   employmentType: 'Проектная работа',
  //   direction: 'Мода',
  //   id: 3,
  //   favorites: false,
  //   avatar: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlRfqXdLO-q30PImiFelXZQfkVtHHQkL9-D65Hm0C0d6hVKsk2',
  //   userName: 'Михаил Корнилов',
  //   price: 10000,
  //   ready: false,
  //   post: 'Швея',
  //   comment: 3,
  //   expert: true,
  //   projects: [
  //     {
  //       id: 9,
  //       src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQrmc024Ug26KQv2LvyeAUfraeF5oLLfIR23tXEqj6Ey4ANzwbI',
  //     },
  //     {
  //       id: 10,
  //       src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKoRLYBrBC3Mgct6sUT4BJkdEKwFEbtjm39143AdAawAd0-7LM',
  //     },
  //     {
  //       id: 11,
  //       src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQcU25pKjU5KUFGunM3wcj9kZnLgKPmQjaT_0YqhGxnt5Qd3xn3',
  //     },
  //     {
  //       id: 12,
  //       src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0u6H7LtMGNWo1z1y7XuDTK5q6vu4mUIC0d10J_aDaqAw2WEk1',
  //     },
  //   ],
  // },
  // {
  //   nick: 'Google.com',
  //   professionalSkills: [],
  //   keywords: [],
  //   level: '',
  //   readyGo: 'Не ищу работу',
  //   location: 'Казань',
  //   currency: '€',
  //   employmentType: 'Стажировка',
  //   direction: 'Маркетинг',
  //   id: 4,
  //   favorites: true,
  //   avatar: '/images/userpic.svg',
  //   userName: 'Алексей Церр',
  //   price: 1500,
  //   ready: true,
  //   post: 'Креатор',
  //   comment: 3,
  //   expert: true,
  //   projects: [
  //     {
  //       id: 1,
  //       src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRrfbA0BN2TzUGKsrt6eRMS3ScZoL9o1cCu4mlXT8H55k35V2XX',
  //     },
  //     {
  //       id: 2,
  //       src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTAA6BTaZ8NrzW6EmRqEQ55D9t-TunfCcevTXvK9Ubva8QlJaUw',
  //     },
  //     {
  //       id: 3,
  //       src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS2U7-OR0on7WMotNL64myhj3fffHM-bxgUanEmvpYv1hZR-pai',
  //     },
  //     {
  //       id: 4,
  //       src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQj4yvU21v1hwqKWAInEvGi8MRd6aS4J9jb7ru2SLh4v8OK1S_T',
  //     },
  //   ],
  // },
  // {
  //   nick: 'Google.com',
  //   professionalSkills: [],
  //   keywords: [],
  //   level: '',
  //   readyGo: 'Рассматриваю варианты',
  //   location: 'Казань',
  //   currency: '¥',
  //   employmentType: 'Стажировка',
  //   direction: 'Швея',
  //   id: 5,
  //   favorites: false,
  //   avatar: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlRfqXdLO-q30PImiFelXZQfkVtHHQkL9-D65Hm0C0d6hVKsk2',
  //   userName: 'Денис Корнилов',
  //   price: 10000,
  //   ready: false,
  //   post: 'Портной',
  //   comment: 3,
  //   expert: true,
  //   projects: [
  //     {
  //       id: 9,
  //       src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQrmc024Ug26KQv2LvyeAUfraeF5oLLfIR23tXEqj6Ey4ANzwbI',
  //     },
  //     {
  //       id: 10,
  //       src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKoRLYBrBC3Mgct6sUT4BJkdEKwFEbtjm39143AdAawAd0-7LM',
  //     },
  //     {
  //       id: 11,
  //       src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQcU25pKjU5KUFGunM3wcj9kZnLgKPmQjaT_0YqhGxnt5Qd3xn3',
  //     },
  //     {
  //       id: 12,
  //       src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0u6H7LtMGNWo1z1y7XuDTK5q6vu4mUIC0d10J_aDaqAw2WEk1',
  //     },
  //   ],
  // },
  // {
  //   nick: 'Google.com',
  //   professionalSkills: [],
  //   keywords: ['UI/UX', 'HTML5', 'CSS3'],
  //   level: 'Стажер (Intern)',
  //   readyGo: 'Рассматриваю варианты',
  //   location: 'Ульяновск',
  //   currency: '€',
  //   employmentType: 'Любая',
  //   direction: 'Дизайн',
  //   id: 6,
  //   favorites: true,
  //   avatar: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTN9CLUmA54MfLyc2qBRHEOZgI6i61SjYZz9K7S6r5IVmBE1WBL',
  //   userName: 'Василий Долгов',
  //   price: 2500,
  //   ready: false,
  //   post: 'Промышленный дизайн',
  //   comment: 3,
  //   expert: false,
  //   projects: [
  //     {
  //       id: 5,
  //       src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSGVKEdegsAZuK4CLxFGoc2iGilZ6Sqh_BQB2tRE2yt0XlUMDvK',
  //     },
  //     {
  //       id: 6,
  //       src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6IWnvlaQXwE23vUMVNcvzLxk0UZ1iXQO87IN78pPtWi9p7P3_',
  //     },
  //     {
  //       id: 7,
  //       src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRtTFskBzUmSxAJ1CLX6F_JkGt3ztUmSnPtOxJl1hUvO-o0XA4r',
  //     },
  //     {
  //       id: 8,
  //       src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTTzluzYWov395gBa7uCOeo1yfHzfJnWIldNMmRG6W5mFEekgxL',
  //     },
  //   ],
  // },
  // {
  //   nick: 'Google.com',
  //   professionalSkills: [],
  //   keywords: ['UI/UX', 'Research'],
  //   level: 'Младший (Junior)',
  //   readyGo: 'Ищу работу',
  //   location: 'Ульяновск',
  //   currency: '¥',
  //   employmentType: 'Проектная работа',
  //   direction: 'Дизайн',
  //   id: 7,
  //   favorites: false,
  //   avatar: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTN9CLUmA54MfLyc2qBRHEOZgI6i61SjYZz9K7S6r5IVmBE1WBL',
  //   userName: 'Евгений Долгов',
  //   price: 2500,
  //   ready: false,
  //   post: 'Продуктовый дизайн',
  //   comment: 3,
  //   expert: false,
  //   projects: [
  //     {
  //       id: 5,
  //       src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSGVKEdegsAZuK4CLxFGoc2iGilZ6Sqh_BQB2tRE2yt0XlUMDvK',
  //     },
  //     {
  //       id: 6,
  //       src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6IWnvlaQXwE23vUMVNcvzLxk0UZ1iXQO87IN78pPtWi9p7P3_',
  //     },
  //     {
  //       id: 7,
  //       src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRtTFskBzUmSxAJ1CLX6F_JkGt3ztUmSnPtOxJl1hUvO-o0XA4r',
  //     },
  //     {
  //       id: 8,
  //       src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTTzluzYWov395gBa7uCOeo1yfHzfJnWIldNMmRG6W5mFEekgxL',
  //     },
  //   ],
  // },
  // {
  //   nick: 'Google.com',
  //   professionalSkills: [],
  //   keywords: ['Дизайнер интерфейсов', 'Figma'],
  //   level: 'Средний (Middle)',
  //   readyGo: 'Не ищу работу',
  //   location: 'Москва',
  //   currency: '₽',
  //   employmentType: 'Полная занятость',
  //   direction: 'Дизайн',
  //   id: 8,
  //   favorites: true,
  //   avatar: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlRfqXdLO-q30PImiFelXZQfkVtHHQkL9-D65Hm0C0d6hVKsk2',
  //   userName: 'Анастасия Корнилова',
  //   price: 10000,
  //   ready: false,
  //   post: 'Web дизайн',
  //   comment: 3,
  //   expert: true,
  //   projects: [
  //     {
  //       id: 9,
  //       src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQrmc024Ug26KQv2LvyeAUfraeF5oLLfIR23tXEqj6Ey4ANzwbI',
  //     },
  //     {
  //       id: 10,
  //       src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKoRLYBrBC3Mgct6sUT4BJkdEKwFEbtjm39143AdAawAd0-7LM',
  //     },
  //     {
  //       id: 11,
  //       src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQcU25pKjU5KUFGunM3wcj9kZnLgKPmQjaT_0YqhGxnt5Qd3xn3',
  //     },
  //     {
  //       id: 12,
  //       src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0u6H7LtMGNWo1z1y7XuDTK5q6vu4mUIC0d10J_aDaqAw2WEk1',
  //     },
  //   ],
  // },
  // {
  //   nick: 'Google.com',
  //   professionalSkills: [],
  //   keywords: [],
  //   level: '',
  //   readyGo: 'Ищу работу',
  //   location: 'Нижний Новгород',
  //   currency: '$',
  //   employmentType: 'Волонтерство',
  //   direction: 'Мода',
  //   id: 9,
  //   favorites: false,
  //   avatar: '/images/userpic.svg',
  //   userName: 'Алекс Церр',
  //   price: 1500,
  //   ready: true,
  //   post: 'Дизайнер принтов/ Дизайнер по текстилю',
  //   comment: 3,
  //   expert: true,
  //   projects: [
  //     {
  //       id: 1,
  //       src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRrfbA0BN2TzUGKsrt6eRMS3ScZoL9o1cCu4mlXT8H55k35V2XX',
  //     },
  //     {
  //       id: 2,
  //       src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTAA6BTaZ8NrzW6EmRqEQ55D9t-TunfCcevTXvK9Ubva8QlJaUw',
  //     },
  //     {
  //       id: 3,
  //       src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS2U7-OR0on7WMotNL64myhj3fffHM-bxgUanEmvpYv1hZR-pai',
  //     },
  //     {
  //       id: 4,
  //       src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQj4yvU21v1hwqKWAInEvGi8MRd6aS4J9jb7ru2SLh4v8OK1S_T',
  //     },
  //   ],
};

const GET_SPECIALIST = '/ch/user-specialists/';

export const getSpecialists = createAsyncThunk('getSpecialists', async (queryParam?: ISpecQueryParam) => {
  try {
    const response = await $api.get(GET_SPECIALIST, {
      params: queryParam,
      paramsSerializer: function paramsSerializer(params) {
        return Object.entries(Object.assign({}, params))
          .map(([key, value]) => `${key}=${value}`)
          .join('&');
      },
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.detail);
    } else {
      throw new Error('Different error than axios');
    }
  }
});

const specialistsSlice = createSlice({
  initialState,
  name: 'specialists',
  reducers: {
    setSpecialists: (state, action: PayloadAction<ISpecialists[]>) => {
      state.specialists = action.payload;
    },
    // changeFavoriteCard: (state = initialState, action: PayloadAction<number>) => {
    //   state.map((i) => (i.id === action.payload ? (i.favorites = !i.favorites) : i));
    // },
    // changeFavorites: (_, action: PayloadAction<boolean>) => {
    //   if (action.payload) return initialState.filter((i) => i.favorites === action.payload);
    //   return initialState;
    // },
    // changeMax: (state: InitialSpecialistsState[], action: PayloadAction<string>) => {
    //   switch (action.payload) {
    //     case 'Цена: по убыванию':
    //       return state.filter((object) => object.price).sort((a, b) => b.price - a.price);
    //     case 'Цена: по возрастанию':
    //       return state.filter((object) => object.price).sort((a, b) => a.price - b.price);
    //     default:
    //       return state;
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSpecialists.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSpecialists.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getSpecialists.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const { setSpecialists } = specialistsSlice.actions;
export default specialistsSlice.reducer;
