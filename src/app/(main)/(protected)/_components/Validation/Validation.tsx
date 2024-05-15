import React, { FC, useEffect, useState } from 'react';
import Registration from '@/app/(main)/(protected)/_components/Validation/Registration/Registration';
import Login from '@/app/(main)/(protected)/_components/Validation/Login/Login';
import * as SC from './Validation.style';
import { ControlSplitButtonGroup } from '@/app/components';
import LoginSecurityWindow from '../../../../components/ui/LoginSecurityWindow/LoginSecurityWindow';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/lib/storeHooks';
import { userAuthGoogle, userAuthVk, userAuthYandex } from '@/lib/store/authSlice/authSlice';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export interface ValidationProps {
  exit: () => void;
  openForgotPassword: (email?: string) => void;
  open: boolean;
}
const Validation: FC<ValidationProps> = ({ exit, openForgotPassword, open }) => {
  const [isRegistration, setIsRegistration] = useState(true);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { control, watch } = useForm();
  const ICON_SIZE = 24;
  const REGISTRATION = t('auth.registration');
  const LOGIN = t('auth.login');
  const authorization = watch('authorization');

  useEffect(() => {
    if (authorization === LOGIN) {
      setIsRegistration(false);
    } else {
      setIsRegistration(true);
    }
  }, [authorization]);

  const clickIconVK = async () => {
    try {
      const userData = await dispatch(userAuthVk()).unwrap();
      if (userData) {
        const { url } = userData;
        exit();
        router.push(url);
      }
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const clickIconYandex = async () => {
    try {
      const userData = await dispatch(userAuthYandex()).unwrap();
      if (userData) {
        const { url } = userData;
        exit();
        router.push(url);
      }
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const clickIconGoogle = async () => {
    try {
      const userData = await dispatch(userAuthGoogle()).unwrap();
      if (userData) {
        const { url } = userData;
        exit();
        router.push(url);
      }
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return (
    <LoginSecurityWindow open={open} exit={exit}>
      <SC.BoxIcon>
        <ControlSplitButtonGroup
          name={'authorization'}
          control={control}
          list={[LOGIN, REGISTRATION]}
          defaultValue={REGISTRATION}
        />
        {isRegistration ? <Registration exit={exit} /> : <Login openForgotPassword={openForgotPassword} exit={exit} />}
        <SC.iconWrapper>
          <SC.Icon
            onClick={clickIconVK}
            priority
            src={'/images/vk.svg'}
            alt='icon vk'
            width={ICON_SIZE}
            height={ICON_SIZE}
          />
          <SC.Icon
            onClick={clickIconYandex}
            priority
            src={'/images/yandex.svg'}
            alt='icon yandex'
            width={ICON_SIZE}
            height={ICON_SIZE}
          />
          <SC.Icon
            onClick={clickIconGoogle}
            priority
            src={'/images/google.svg'}
            alt='icon google'
            width={ICON_SIZE}
            height={ICON_SIZE}
          />
        </SC.iconWrapper>
      </SC.BoxIcon>
    </LoginSecurityWindow>
  );
};
export default Validation;
