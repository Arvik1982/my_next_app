'use client';

import * as SC from './AccountVerified.style';
import React from 'react';
import { Button, LoginSecurityWindow } from '@/app/components';
import { useTranslation } from 'react-i18next';
import { AccountVerifiedProps } from './AccountVerified.type';
import { useAppDispatch } from '@/lib/storeHooks';
import { emailVerifyRegistration } from '@/lib/store/authSlice/authSlice';
import { useRouter } from 'next/navigation';

const AccountVerified = ({ exit, open, params }: AccountVerifiedProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { code } = params;

  const verify = async () => {
    try {
      await dispatch(emailVerifyRegistration({ verification_code: code })).unwrap();
      exit();
      localStorage.setItem('emailVerify', 'true');
      router.push('/profile');
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return (
    <LoginSecurityWindow open={open} exit={exit}>
      <SC.Container>
        <SC.RegistrationSuccess>{t('auth.accConfirmed')}</SC.RegistrationSuccess>
        <SC.Compliments>{t('auth.congratulations')}</SC.Compliments>
        <SC.ButtonBlock>
          <Button fullWidth onClick={verify}>
            <SC.ButtonText>{t('auth.done')}</SC.ButtonText>
          </Button>
        </SC.ButtonBlock>
      </SC.Container>
    </LoginSecurityWindow>
  );
};

export default AccountVerified;
