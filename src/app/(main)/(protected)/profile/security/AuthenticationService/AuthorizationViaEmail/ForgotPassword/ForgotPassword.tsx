import React, { FC } from 'react';
import LoginSecurityWindow from '@/app/components/ui/LoginSecurityWindow/LoginSecurityWindow';
import { Button } from '@/app/components';
import * as SC from './ForgotPassword.style';
import * as GSC from '../../AuthenticationServiceGlobal.style';
import { ForgotPasswordProps } from './ForgotPassword.type';
import { useTranslation } from 'react-i18next';

const ForgotPassword: FC<ForgotPasswordProps> = ({ open, exit, resend, email }) => {
  const { t } = useTranslation();

  return (
    <LoginSecurityWindow open={open} exit={exit}>
      <SC.Container>
        <GSC.Title>{t('authorization.forgotPassTitle')}</GSC.Title>
        <SC.Text>
          {t('authorization.letterToEmailBefore')}
          <SC.Email>{email}</SC.Email>
          {t('authorization.letterToEmailAfter')}
        </SC.Text>
        <SC.Text>{t('authorization.followLink')}</SC.Text>
        <GSC.ButtonBlock>
          <Button fullWidth onClick={() => resend(email)}>
            <GSC.ButtonText>{t('authorization.resend')}</GSC.ButtonText>
          </Button>
        </GSC.ButtonBlock>
      </SC.Container>
    </LoginSecurityWindow>
  );
};

export default ForgotPassword;
