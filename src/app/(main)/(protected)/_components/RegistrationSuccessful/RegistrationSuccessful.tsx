'use client';

import * as SC from './RegistrationSuccessful.style';
import LoginSecurityWindow from '../../../../components/ui/LoginSecurityWindow/LoginSecurityWindow';
import { Button } from '@/app/components';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/lib/storeHooks';

export interface RegistrationSuccessfulProps {
  exit: () => void;
  open: boolean;
}

const RegistrationSuccessful: FC<RegistrationSuccessfulProps> = ({ exit, open }) => {
  const userData = useAppSelector((state) => state.auth.user);
  const { t } = useTranslation();
  const resend = () => {};

  return (
    <LoginSecurityWindow exit={exit} open={open}>
      <SC.Container>
        <SC.RegistrationSuccess>{t('auth.regCompleted')}</SC.RegistrationSuccess>
        <SC.Recommendations>
          {t('auth.letterToEmailBefore')}
          <SC.Email> {userData?.email}</SC.Email>
          {t('auth.letterToEmailAfter')}
        </SC.Recommendations>
        <SC.Recommendations>{t('auth.followLink')}</SC.Recommendations>
        <SC.ButtonBlock>
          <Button fullWidth onClick={resend}>
            <SC.ButtonText>{t('auth.resend')}</SC.ButtonText>
          </Button>
        </SC.ButtonBlock>
      </SC.Container>
    </LoginSecurityWindow>
  );
};

export default RegistrationSuccessful;
