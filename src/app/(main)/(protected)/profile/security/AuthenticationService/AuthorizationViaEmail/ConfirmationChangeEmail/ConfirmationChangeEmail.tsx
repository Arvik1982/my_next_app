'use client';
import * as SC from './ConfirmationChangeEmail.style';
import * as GSC from '../../AuthenticationServiceGlobal.style';
import { Button } from '@/app/components';
import { FC } from 'react';
import LoginSecurityWindow from '@/app/components/ui/LoginSecurityWindow/LoginSecurityWindow';
import { ConfirmationChangeEmailProps } from './ConfirmationChangeEmail.type';
import { useTranslation } from 'react-i18next';

const ConfirmationChangeEmail: FC<ConfirmationChangeEmailProps> = ({ resend, exit, open, email }) => {
  const { t } = useTranslation();
  return (
    <LoginSecurityWindow open={open} exit={exit}>
      <SC.BoxContainer>
        <GSC.Title>{t('authorization.changeEmailTitle')}</GSC.Title>
        <SC.Text>
          {t('authorization.letterToEmailBefore')}
          <SC.Email>{email}</SC.Email>
          {t('authorization.letterToEmailAfter')}
        </SC.Text>
        <SC.Text>{t('authorization.clickLink')}</SC.Text>
        <GSC.ButtonBlock>
          <Button onClick={() => resend(email)} fullWidth>
            <GSC.ButtonText>{t('authorization.resend')}</GSC.ButtonText>
          </Button>
        </GSC.ButtonBlock>
      </SC.BoxContainer>
    </LoginSecurityWindow>
  );
};

export default ConfirmationChangeEmail;
