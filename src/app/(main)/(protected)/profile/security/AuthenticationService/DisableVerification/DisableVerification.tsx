'use client';
import * as SC from './DisableVerification.style';
import * as GSC from '../AuthenticationServiceGlobal.style';
import React, { FC } from 'react';
import { PropsDisableVerification } from './DisableVerification.type';
import { Button, LoginSecurityWindow } from '@/app/components';
import ButtonGrey from '@/app/components/ui/ButtonGrey/ButtonGrey';
import { useTranslation } from 'react-i18next';

const DisableVerification: FC<PropsDisableVerification> = ({ exit, disable, open }) => {
  const { t } = useTranslation();
  return (
    <LoginSecurityWindow exit={exit} open={open}>
      <SC.Content>
        <SC.Title>{t('authentication.disableVerificationTitle')}</SC.Title>
        <SC.Recommendations>{t('authentication.disableVerificationGosuslugi')}</SC.Recommendations>
        <GSC.ButtonGroup>
          <Button fullWidth onClick={disable}>
            <GSC.ButtonText>{t('authentication.disconnect')}</GSC.ButtonText>
          </Button>
          <ButtonGrey fullWidth onClick={exit}>
            {t('authentication.cancel')}
          </ButtonGrey>
        </GSC.ButtonGroup>
      </SC.Content>
    </LoginSecurityWindow>
  );
};

export default DisableVerification;
