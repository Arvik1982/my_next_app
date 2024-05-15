'use client';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as SC from './Registration.style';
import * as VGSC from '@/app/(main)/(protected)/_components/Validation/ValidationGlobal.style';
import {
  RegistarionFormValues,
  QuerySignUpParam,
} from '@/app/(main)/(protected)/_components/Validation/Registration/RegistrationTypes';
import InputRegister from '@/app/components/ui/InputRegister/InputRegister';
import { Button } from '@/app/components';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/lib/storeHooks';
import { setUser, userSignIn, userSignUp } from '@/lib/store/authSlice/authSlice';
import InputPassword from '@/app/components/ui/InputPassword/InputPassword';
import { useRouter } from 'next/navigation';
import { LoginFormValues } from '../Login/LoginTypes';
import { usePathname } from 'next/navigation';
import Cookies from 'js-cookie';

export interface RegistrationProps {
  exit: () => void;
}

const Registration: FC<RegistrationProps> = ({ exit }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<RegistarionFormValues>();

  const signUp = async (queryParam: QuerySignUpParam) => {
    try {
      const userData = await dispatch(userSignUp(queryParam)).unwrap();
      if (userData) {
        dispatch(setUser(userData));
        exit();
      }
    } catch (error) {
      setError('email', {
        message: (error as Error).message,
      });
    }
  };

  const signIn = async (queryParam: LoginFormValues) => {
    try {
      const tokenData = await dispatch(userSignIn(queryParam)).unwrap();
      if (tokenData) {
        const { access_token } = tokenData;
        Cookies.set('access_token', access_token);
        exit();
        if (pathname === '/login') {
          router.back();
        } else {
          router.push('/profile');
        }
      }
    } catch (error) {
      if ((error as Error).message === '401') {
        setError('password', {
          message: t('auth.invalidPassword'),
        });
      } else if ((error as Error).message === '404') {
        setError('email', {
          message: t('auth.invalidMail'),
        });
      }
    }
  };

  const onSubmit: SubmitHandler<RegistarionFormValues> = async (data: RegistarionFormValues) => {
    const signUpParam: QuerySignUpParam = {
      first_name: data.firstName,
      second_name: data.lastName,
      email: data.email,
      password: data.password,
    };
    const signInParam: LoginFormValues = {
      email: data.email,
      password: data.password,
    };

    await signUp(signUpParam);
    await signIn(signInParam);
  };

  return (
    <VGSC.Wrapper>
      <VGSC.FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <SC.Name>
          <SC.FormName>
            <span>{t('auth.firstName')}</span>
            <InputRegister
              type={'text'}
              register={register('firstName', {
                required: true,
              })}
              err={Boolean(errors.firstName)}
            />
          </SC.FormName>
          <SC.FormName>
            <span>{t('auth.lastName')}</span>
            <InputRegister
              type={'text'}
              register={register('lastName', {
                required: true,
              })}
              err={Boolean(errors.lastName)}
            />
          </SC.FormName>
        </SC.Name>
        <VGSC.FormElement>
          <span>{t('auth.email')}</span>
          <InputRegister
            type={'email'}
            register={register('email', {
              required: true,
            })}
            err={Boolean(errors.email)}
          />
          {errors?.email && <VGSC.Error>{errors.email.message}</VGSC.Error>}
        </VGSC.FormElement>
        <VGSC.FormElement>
          <InputPassword
            label={t('auth.password')}
            register={register('password', {
              required: true,
              minLength: {
                value: 8,
                message: t('auth.min8Characters'),
              },
            })}
            errorText={errors.password?.message}
            error={!!errors.password}
          />
        </VGSC.FormElement>
        <VGSC.FormElement>
          <InputPassword
            label={t('auth.confirmPassword')}
            register={register('confirmPassword', {
              required: true,
              minLength: {
                value: 8,
                message: t('auth.min8Characters'),
              },
              validate: (value) => {
                if (value !== watch('password')) {
                  return t('auth.passNotEqual');
                }
              },
            })}
            errorText={errors.confirmPassword?.message}
            error={!!errors.confirmPassword}
          />
        </VGSC.FormElement>
        <SC.ButtonBlock>
          <Button fullWidth type={'submit'}>
            <VGSC.ButtonText>{t('auth.registration')}</VGSC.ButtonText>
          </Button>
        </SC.ButtonBlock>
      </VGSC.FormWrapper>
      <VGSC.Or>{t('auth.or')}</VGSC.Or>
    </VGSC.Wrapper>
  );
};

export default Registration;
