import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputRegister from '@/app/components/ui/InputRegister/InputRegister';
import * as SC from './Login.style';
import * as VGSC from '@/app/(main)/(protected)/_components/Validation/ValidationGlobal.style';
import { LoginFormValues } from '@/app/(main)/(protected)/_components/Validation/Login/LoginTypes';
import { Button } from '@/app/components';
import { useAppDispatch } from '@/lib/storeHooks';
import { checkUser, setUser, userSignIn } from '@/lib/store/authSlice/authSlice';
import { useTranslation } from 'react-i18next';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import InputPassword from '@/app/components/ui/InputPassword/InputPassword';
import { setPersonalData } from '@/lib/store/profileSlice/profileSlice';

export interface LoginProps {
  exit: () => void;
  openForgotPassword: (email?: string) => void;
}

const Login: FC<LoginProps> = ({ exit, openForgotPassword }) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    watch,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const watchEmail = watch('email');

  const checkAuth = async () => {
    try {
      const userData = await dispatch(checkUser()).unwrap();
      if (userData) {
        dispatch(setUser(userData));
        dispatch(setPersonalData(userData));
      }
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const signIn = async (queryParam: LoginFormValues) => {
    try {
      const userData = await dispatch(userSignIn(queryParam)).unwrap();
      if (userData) {
        const { access_token } = userData;
        Cookies.set('access_token', access_token);
        checkAuth();
        reset();
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

  const onSubmit: SubmitHandler<LoginFormValues> = async (data: LoginFormValues) => {
    signIn(data);
  };

  return (
    <VGSC.Wrapper>
      <VGSC.FormWrapper onSubmit={handleSubmit(onSubmit)}>
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
        <SC.ButtonBlock>
          <Button fullWidth type={'submit'}>
            <VGSC.ButtonText>{t('auth.enter')}</VGSC.ButtonText>
          </Button>
          <SC.WhiteButton>
            <Button fullWidth onClick={() => openForgotPassword(watchEmail)}>
              <SC.ForgotPassword>{t('authorization.forgotPass')}</SC.ForgotPassword>
            </Button>
          </SC.WhiteButton>
        </SC.ButtonBlock>
      </VGSC.FormWrapper>

      <VGSC.Or>{t('auth.or')}</VGSC.Or>
    </VGSC.Wrapper>
  );
};

export default Login;
