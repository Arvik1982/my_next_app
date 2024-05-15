import React, { FC } from 'react';
import { Button, LoginSecurityWindow } from '@/app/components';
import * as SC from './ConfirmationDelete.style';
import * as GSC from '../AuthenticationServiceGlobal.style';
import { ConfirmationDeleteProps } from './ConfirmationDelete.type';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/lib/storeHooks';

const ConfirmationDelete: FC<ConfirmationDeleteProps> = ({ open, exit, resend }) => {
  const user = useAppSelector((state) => state.auth.user);
  const { t } = useTranslation();
  return (
    <LoginSecurityWindow open={open} exit={exit}>
      <SC.Container>
        <GSC.Title>{t('authentication.deleteAccountTitle')}</GSC.Title>
        <SC.Text>
          {t('authentication.letterToEmailBefore')}
          <SC.Email>{user?.email}</SC.Email>
          {t('authentication.letterToEmailAfter')}
        </SC.Text>
        <SC.Text>{t('authentication.followLink')}</SC.Text>
        <GSC.ButtonBlock>
          <Button onClick={resend} fullWidth>
            <GSC.ButtonText>{t('authentication.resend')}</GSC.ButtonText>
          </Button>
        </GSC.ButtonBlock>
      </SC.Container>
    </LoginSecurityWindow>
  );
};

export default ConfirmationDelete;
