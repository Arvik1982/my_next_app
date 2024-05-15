import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  ContactsState,
  IDirection,
  ISocialNetwork,
  IUser,
  IUserSpecialization,
  IUserSpecializationBody,
  InfoProfileState,
  ProfileState,
} from '../types';
import { $api, $authApi } from '@/clients/apiClient';
import { AxiosError } from 'axios';

const initialState: ProfileState = {
  profile: {
    aboutYourself: '',
    city: '',
    country: '',
    date: '',
    firstName: '',
    gender: 'Мужcкой',
    gmt: '',
    language: '',
    lastName: '',
    grade: '',
    link: '',
    status: '',
    skills: '',
    specializations: [
      {
        name: '',
        direction: {
          name: '',
        },
      },
    ],
  },
  contacts: {
    email: '',
    links: [],
    networks: [],
    phone: {
      phoneCode: '',
      phoneNumber: '',
    },
    site: '',
  },
  isLoading: false,
  specializationIds: [],
  directionIds: [],
};

const CREATE_SOCIAL_NETWORK = '/ch/social-network/';
const GET_DIRECTION = '/ch/direction/';
const USER_SPECIALIZATION = '/ch/user-specialization/';

export const fetchSocialNetworks = createAsyncThunk(
  'fetchSocialNetworks',
  async ({ user_uid }: { user_uid: string }) => {
    try {
      const response = await $api.get(`/ch/social-network/${user_uid}/`);
      return response.data as ISocialNetwork[];
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.detail);
      } else {
        throw new Error('Different error than axios');
      }
    }
  },
);

export const createSocialNetwork = createAsyncThunk(
  'createSocialNetwork',
  async ({ network_name, username }: { network_name: string; username: string }) => {
    try {
      const { data } = await $authApi.post(CREATE_SOCIAL_NETWORK, { network_name, username });
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.detail);
      } else {
        throw new Error('Different error than axios');
      }
    }
  },
);

export const updateSocialNetwork = createAsyncThunk(
  'updateSocialNetwork',
  async ({
    network_name,
    username,
    social_network_id,
  }: {
    network_name: string;
    username: string;
    social_network_id?: number;
  }) => {
    try {
      const { data } = await $authApi.patch(`/ch/social-network/${social_network_id}/`, { network_name, username });
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.detail);
      } else {
        throw new Error('Different error than axios');
      }
    }
  },
);

export const deleteSocialNetwork = createAsyncThunk(
  'deleteSocialNetwork',
  async ({ social_network_id }: { social_network_id?: number }) => {
    try {
      const { data } = await $authApi.delete(`/ch/social-network/${social_network_id}/`);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.detail);
      } else {
        throw new Error('Different error than axios');
      }
    }
  },
);

export const fetchDirection = createAsyncThunk('fetchDirection', async () => {
  try {
    const response = await $api.get(GET_DIRECTION);
    return response.data as IDirection[];
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.detail);
    } else {
      throw new Error('Different error than axios');
    }
  }
});

export const fetchSpecialization = createAsyncThunk(
  'fetchSpecialization',
  async ({ direction_id }: { direction_id: number }) => {
    try {
      const response = await $api.get(`/ch/specialization/${direction_id}/`);
      return response.data as IDirection[];
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.detail);
      } else {
        throw new Error('Different error than axios');
      }
    }
  },
);

export const fetchUserSpecialization = createAsyncThunk(
  'fetchUserSpecialization',
  async ({ user_uid }: { user_uid: string }) => {
    try {
      const { data } = await $authApi.get(`/ch/user-specialization/${user_uid}/`);
      return data as IUserSpecialization;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.detail);
      } else {
        throw new Error('Different error than axios');
      }
    }
  },
);

export const createUserSpecialization = createAsyncThunk(
  'createUserSpecialization',
  async (body: IUserSpecializationBody) => {
    try {
      const response = await $authApi.post(USER_SPECIALIZATION, body);
      return response.data as IUserSpecialization;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.detail);
      } else {
        throw new Error('Different error than axios');
      }
    }
  },
);

export const updateUserSpecialization = createAsyncThunk(
  'updateUserSpecialization',
  async (body: IUserSpecializationBody) => {
    try {
      const response = await $authApi.put(USER_SPECIALIZATION, body);
      return response.data as IUserSpecialization;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response?.status;
      } else {
        throw new Error('Different error than axios');
      }
    }
  },
);

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<InfoProfileState>) => {
      state.profile = action.payload;
    },
    setPersonalData: (state, action: PayloadAction<IUser>) => {
      const { first_name, second_name, birthday, username } = action.payload;
      state.profile.firstName = first_name;
      state.profile.lastName = second_name;
      state.profile.date = birthday;
      state.profile.link = username;
    },
    setProfileContacts: (state, action: PayloadAction<ContactsState>) => {
      state.contacts = action.payload;
    },
    addSocialNetwork: (state, action: PayloadAction<ISocialNetwork>) => {
      state.contacts.networks.push(action.payload);
    },
    removeSocialNetwork: (state, action: PayloadAction<string | undefined>) => {
      state.contacts.networks = state.contacts.networks.filter((network) => network.key != action.payload);
    },
    setDirectionIds: (state, action: PayloadAction<{ index: number; id: number }>) => {
      const { index, id } = action.payload;
      state.directionIds[index] = id;
    },
    setSpecializationIds: (state, action: PayloadAction<{ index: number; id: number }[]>) => {
      action.payload.forEach((item) => {
        const { index, id } = item;
        state.specializationIds[index] = id;
      });
    },
    removeSpecializationId: (state, action: PayloadAction<number>) => {
      state.specializationIds = state.specializationIds.filter((_, index) => index !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSocialNetworks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSocialNetworks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.networks = action.payload.map((item) => {
          return { ...item, key: item.id?.toString() };
        });
      })
      .addCase(fetchSocialNetworks.rejected, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(createSocialNetwork.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSocialNetwork.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.networks.push(action.payload);
      })
      .addCase(createSocialNetwork.rejected, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(updateSocialNetwork.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateSocialNetwork.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateSocialNetwork.rejected, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(deleteSocialNetwork.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteSocialNetwork.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteSocialNetwork.rejected, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(fetchDirection.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDirection.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchDirection.rejected, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(fetchSpecialization.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSpecialization.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchSpecialization.rejected, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(fetchUserSpecialization.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserSpecialization.fulfilled, (state, action) => {
        const { grade, specializations, status } = action.payload;
        state.profile.specializations = specializations;
        state.profile.grade = grade;
        state.profile.status = status;
        state.isLoading = false;
      })
      .addCase(fetchUserSpecialization.rejected, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(createUserSpecialization.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUserSpecialization.fulfilled, (state, action) => {
        const { grade, specializations, status } = action.payload;
        state.profile.specializations = specializations;
        state.profile.grade = grade;
        state.profile.status = status;
        state.isLoading = false;
      })
      .addCase(createUserSpecialization.rejected, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(updateUserSpecialization.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserSpecialization.fulfilled, (state, action) => {
        const { grade, specializations, status } = action.payload;
        state.profile.specializations = specializations;
        state.profile.grade = grade;
        state.profile.status = status;
        state.isLoading = false;
      })
      .addCase(updateUserSpecialization.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  setProfile,
  setPersonalData,
  setProfileContacts,
  addSocialNetwork,
  removeSocialNetwork,
  setDirectionIds,
  setSpecializationIds,
  removeSpecializationId,
} = profileSlice.actions;

export default profileSlice.reducer;
