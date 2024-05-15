import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InitialCompaniesState {
  id: number;
  companyName: string;
  logo: string;
  directions: string;
  location: string;
  favorite: boolean;
  comment: number;
}

const initialState: InitialCompaniesState[] = [
  {
    id: 1,
    companyName: 'Яндекс',
    logo: '/images/logoCompany.png',
    directions: 'It-компания',
    location: 'Россия',
    comment: 3,
    favorite: false,
  },
  {
    id: 2,
    companyName: 'TINKOFF',
    logo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ106d48Fe18xQ_D86JbF4TmaBiW_MszFbT490kCkV6bJNyPv2F',
    directions: 'It-компания',
    location: 'Россия',
    comment: 3,
    favorite: false,
  },
  {
    id: 3,
    companyName: 'МТС',
    logo: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTYOVrKWKHeEOsSNHk1V1A2gHnomgEkms2KZ5UWsnELuvW9dGnL',
    directions: 'It-компания',
    location: 'Россия',
    comment: 3,
    favorite: false,
  },
  {
    id: 4,
    companyName: 'ГК Астра',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRo-eQismNWudRXx1jaBjW3Rd0M8oVjUkI0woc4y9jHjHVH9Qh',
    directions: 'It-компания',
    location: 'Россия',
    comment: 3,
    favorite: false,
  },
  {
    id: 5,
    companyName: 'VK',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/800px-VK_Compact_Logo_%282021-present%29.svg.png',
    directions: 'It-компания',
    location: 'Россия',
    comment: 3,
    favorite: false,
  },
  {
    id: 6,
    companyName: 'Банк ПСБ',
    logo: 'https://yt3.googleusercontent.com/ytc/AIf8zZSdfssRig8yAUdhN2W82EPoima2fBMpf3st5YIc6Q=s900-c-k-c0x00ffffff-no-rj',
    directions: 'It-компания',
    location: 'Россия',
    comment: 3,
    favorite: false,
  },
  {
    id: 7,
    companyName: 'Холдинг Т1',
    logo: 'https://habrastorage.org/getpro/moikrug/uploads/company/100/007/328/7/logo/medium_e89e1a2fc9f27d2be733776df9afc712.png',
    directions: 'It-компания',
    location: 'Россия',
    comment: 3,
    favorite: false,
  },
  {
    id: 8,
    companyName: 'YADRO',
    logo: 'https://habrastorage.org/getpro/moikrug/uploads/company/100/005/888/4/logo/medium_7c237af94a5398f7aa179b9b4ec96fcd.png',
    directions: 'It-компания',
    location: 'Россия',
    comment: 3,
    favorite: false,
  },
];

const slice = createSlice({
  initialState,
  name: 'companies/slice',
  reducers: {
    changeFavoriteCard: (state: InitialCompaniesState[] = initialState, action: PayloadAction<number>) => {
      state.map((i) => (i.id === action.payload ? (i.favorite = !i.favorite) : i));
    },
    changeFavorites: (_, action: PayloadAction<boolean>) => {
      if (action.payload) return initialState.filter((i) => i.favorite === action.payload);
      return initialState;
    },
  },
});

export const { changeFavoriteCard, changeFavorites } = slice.actions;
export default slice.reducer;
