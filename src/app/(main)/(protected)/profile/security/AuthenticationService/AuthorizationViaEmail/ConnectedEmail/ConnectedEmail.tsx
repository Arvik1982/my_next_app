import React, { FC } from 'react';
import LoginSecurityWindow from '@/app/components/ui/LoginSecurityWindow/LoginSecurityWindow';
import * as SC from './ConnectedEmail.style';
import * as GSC from '../../AuthenticationServiceGlobal.style';
import { Button } from '@/app/components';
import { ConnectedEmailProps } from './ConnectedEmail.type';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/lib/storeHooks';

const ConnectedEmail: FC<ConnectedEmailProps> = ({ clickContinue, exit, open }) => {
  const { t } = useTranslation();
  const user = useAppSelector((state) => state.auth.user);
  return (
    <LoginSecurityWindow open={open} exit={exit}>
      <SC.Container>
        <GSC.Title>{t('authorization.connectedEmailTitle')}</GSC.Title>
        <SC.Text>
          {t('authorization.letterToEmailBefore')}
          <SC.Email> {user?.email} </SC.Email>
          {t('authorization.letterToEmailAfter')}
        </SC.Text>
        <SC.Text>{t('authorization.clickLinkConfirm')}</SC.Text>
        <GSC.ButtonBlock>
          <Button fullWidth onClick={clickContinue}>
            <GSC.ButtonText>{t('authorization.resend')}</GSC.ButtonText>
          </Button>
        </GSC.ButtonBlock>
      </SC.Container>
    </LoginSecurityWindow>
  );
};

export default ConnectedEmail;
