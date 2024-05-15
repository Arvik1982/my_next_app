import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { $api, $authApi } from '@/clients/apiClient';
import { AxiosError } from 'axios';
import {
  AuthState,
  IChangeEmail,
  IChangePassword,
  ISignUp,
  IUpdatePhotos,
  IUpdateUser,
  IUpdateWorkStatus,
  IUser,
} from '../types';
import Cookies from 'js-cookie';

const initialState: AuthState = {
  isAuthenticated: false,
  isSignUp: false,
  isLoading: false,
  user: null,
};

const SIGN_UP_PATH = '/ch/user/';
const SIGN_IN_PATH = '/ch/auth/login/';
const RESET_PASSWORD_REQUEST = '/ch/reset-password/request/';
const CHANGE_EMAIL = '/ch/change-email/';
const CHANGE_EMAIL_CANCEL = '/ch/change-email/cancel/';
const CHANGE_EMAIL_RESEND = '/ch/change-email/resend-verification-email/';
const CHANGE_PASSWORD = '/ch/change-password/';
const CHECK_AUTH_PATH = '/ch/user/profile/';
const AUTH_VK = '/ch/auth-vk/start/';
const AUTH_YANDEX = '/ch/auth-yandex/start/';
const AUTH_GOOGLE = '/ch/auth-google/start/';
const UPDATE_USER = '/ch/user/';
const UDATE_PHOTOS = '/ch/user/photos';
const UPDATE_WORK_STATUS = '/ch/user/work';

export const userSignUp = createAsyncThunk(
  'userSignUp',
  async ({ first_name, second_name, email, password }: ISignUp) => {
    try {
      const response = await $api.post(SIGN_UP_PATH, { first_name, second_name, email, password });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.detail);
      } else {
        throw new Error('Different error than axios');
      }
    }
  },
);

export const emailVerifyRegistration = createAsyncThunk(
  'emailVerifyRegistration',
  async ({ verification_code }: { verification_code: string }) => {
    try {
      const response = await $api.post(`/ch/email-verify/registration/${verification_code}/`);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.detail);
      } else {
        throw new Error('Different error than axios');
      }
    }
  },
);

export const userSignIn = createAsyncThunk(
  'userSignIn',
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await $api.post(SIGN_IN_PATH, { email, password });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response?.status;
      } else {
        throw new Error('Different error than axios');
      }
    }
  },
);

export const changeEmail = createAsyncThunk('changeEmail', async (body: IChangeEmail) => {
  try {
    const response = await $authApi.post(CHANGE_EMAIL, body);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.status;
    } else {
      throw new Error('Different error than axios');
    }
  }
});

export const changeEmailCancel = createAsyncThunk('changeEmailCancel', async () => {
  try {
    const response = await $authApi.post(CHANGE_EMAIL_CANCEL);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data.detail;
    } else {
      throw new Error('Different error than axios');
    }
  }
});

export const changeEmailResend = createAsyncThunk('changeEmailResend', async ({ email }: { email: string }) => {
  try {
    const response = await $api.post(CHANGE_EMAIL_RESEND, { email });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data.detail;
    } else {
      throw new Error('Different error than axios');
    }
  }
});

export const emailVerifyChangeEmail = createAsyncThunk(
  'emailVerifyChangeEmail',
  async ({ verification_code }: { verification_code: string }) => {
    try {
      const response = await $api.post(`/ch/email-verify/change-email/${verification_code}/`);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.detail);
      } else {
        throw new Error('Different error than axios');
      }
    }
  },
);

export const resetPasswordRequest = createAsyncThunk('resetPasswordRequest', async ({ email }: { email: string }) => {
  try {
    const response = await $api.post(RESET_PASSWORD_REQUEST, { email });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data.detail;
    } else {
      throw new Error('Different error than axios');
    }
  }
});

export const resetPassword = createAsyncThunk(
  'resetPassword',
  async ({
    verification_code,
    new_password,
    confirm_new_password,
  }: {
    verification_code: string;
    new_password: string;
    confirm_new_password: string;
  }) => {
    try {
      const response = await $api.post(`/ch/reset-password/${verification_code}/`, {
        new_password,
        confirm_new_password,
      });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response?.data.detail;
      } else {
        throw new Error('Different error than axios');
      }
    }
  },
);

export const changePassword = createAsyncThunk('changePassword', async (body: IChangePassword) => {
  try {
    const response = await $authApi.post(CHANGE_PASSWORD, body);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data.detail;
    } else {
      throw new Error('Different error than axios');
    }
  }
});

export const checkUser = createAsyncThunk('checkUser', async () => {
  try {
    const response = await $authApi.get(CHECK_AUTH_PATH);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data.detail;
    } else {
      throw new Error('Different error than axios');
    }
  }
});

export const userAuthVk = createAsyncThunk('userAuthVk', async () => {
  try {
    const response = await $api.get(AUTH_VK);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data;
    } else {
      throw new Error('Different error than axios');
    }
  }
});

export const userAuthYandex = createAsyncThunk('userAuthYandex', async () => {
  try {
    const response = await $api.get(AUTH_YANDEX);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data;
    } else {
      throw new Error('Different error than axios');
    }
  }
});

export const userAuthGoogle = createAsyncThunk('userAuthGoogle', async () => {
  try {
    const response = await $api.get(AUTH_GOOGLE);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data;
    } else {
      throw new Error('Different error than axios');
    }
  }
});

export const updateUser = createAsyncThunk(
  'updateUser',
  async ({ first_name, second_name, username, birthday }: IUpdateUser) => {
    try {
      const response = await $authApi.patch(UPDATE_USER, { first_name, second_name, username, birthday });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response?.data.detail;
      } else {
        throw new Error('Different error than axios');
      }
    }
  },
);

export const updatePhotos = createAsyncThunk('updatePhotos', async (formData: FormData, { dispatch }) => {
  try {
    const { data } = await $authApi.put(UDATE_PHOTOS, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    dispatch(setPhotos(data));
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data.detail;
    } else {
      throw new Error('Different error than axios');
    }
  }
});

export const updateWork = createAsyncThunk('updateWork', async ({ work_status }: IUpdateWorkStatus) => {
  try {
    const response = await $authApi.patch(UPDATE_WORK_STATUS, { work_status });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data.detail;
    } else {
      throw new Error('Different error than axios');
    }
  }
});

export const userLogout = createAsyncThunk('userLogout', async () => {
  Cookies.remove('access_token');
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    setSignUpModal(state, action: PayloadAction<boolean>) {
      state.isSignUp = action.payload;
    },
    setPhotos(state, action: PayloadAction<IUpdatePhotos>) {
      const { photo, profile_cover } = action.payload;
      if (state.user) {
        state.user.photo = photo;
        state.user.profile_cover = profile_cover;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userSignIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userSignIn.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(userSignIn.rejected, (state) => {
        state.isLoading = false;
      }),
      builder
        .addCase(userSignUp.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(userSignUp.fulfilled, (state) => {
          state.isLoading = false;
          state.isSignUp = true;
        })
        .addCase(userSignUp.rejected, (state) => {
          state.isLoading = false;
        }),
      builder
        .addCase(emailVerifyRegistration.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(emailVerifyRegistration.fulfilled, (state) => {
          state.isLoading = false;
        })
        .addCase(emailVerifyRegistration.rejected, (state) => {
          state.isLoading = false;
        }),
      builder
        .addCase(resetPasswordRequest.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(resetPasswordRequest.fulfilled, (state) => {
          state.isLoading = false;
        })
        .addCase(resetPasswordRequest.rejected, (state) => {
          state.isLoading = false;
        }),
      builder
        .addCase(resetPassword.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(resetPassword.fulfilled, (state) => {
          state.isLoading = false;
          state.isAuthenticated = true;
        })
        .addCase(resetPassword.rejected, (state) => {
          state.isLoading = false;
        }),
      builder
        .addCase(checkUser.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(checkUser.fulfilled, (state) => {
          state.isAuthenticated = true;
          state.isLoading = false;
        })
        .addCase(checkUser.rejected, (state) => {
          state.isLoading = false;
        }),
      builder
        .addCase(userAuthVk.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(userAuthVk.fulfilled, (state) => {
          state.isLoading = false;
        })
        .addCase(userAuthVk.rejected, (state) => {
          state.isLoading = false;
        }),
      builder
        .addCase(userAuthYandex.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(userAuthYandex.fulfilled, (state) => {
          state.isLoading = false;
        })
        .addCase(userAuthYandex.rejected, (state) => {
          state.isLoading = false;
        }),
      builder
        .addCase(userAuthGoogle.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(userAuthGoogle.fulfilled, (state) => {
          state.isLoading = false;
        })
        .addCase(userAuthGoogle.rejected, (state) => {
          state.isLoading = false;
        }),
      builder
        .addCase(userLogout.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(userLogout.fulfilled, (state) => {
          state.isAuthenticated = false;
          state.isLoading = false;
        })
        .addCase(userLogout.rejected, (state) => {
          state.isLoading = false;
        }),
      builder
        .addCase(updateUser.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(updateUser.fulfilled, (state) => {
          state.isLoading = false;
        })
        .addCase(updateUser.rejected, (state) => {
          state.isLoading = false;
        }),
      builder
        .addCase(updatePhotos.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(updatePhotos.fulfilled, (state) => {
          state.isLoading = false;
        })
        .addCase(updatePhotos.rejected, (state) => {
          state.isLoading = false;
        });
    builder
      .addCase(updateWork.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateWork.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateWork.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setUser, setSignUpModal, setPhotos } = authSlice.actions;

export default authSlice.reducer;
