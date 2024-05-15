import { useTranslation } from 'react-i18next';
import * as SC from './ConfirmPrimaryEmail.style';
import { FC } from 'react';

interface ConfirmPrimaryEmailProps {
  email: string;
  cancel: () => void;
  resend: (email: string) => void;
}

const ConfirmPrimaryEmail: FC<ConfirmPrimaryEmailProps> = ({ email, cancel, resend }) => {
  const { t } = useTranslation();

  return (
    <SC.Container>
      <SC.Wrapper>
        <SC.Title>{t('authorization.confirmEmailTitle')}</SC.Title>
        <SC.Text>
          {t('authorization.letterToEmailBefore')}
          <SC.Email>{email}</SC.Email>
          {t('authorization.letterConfirmEmailAfter')}
        </SC.Text>
        <SC.ButtonBlock>
          <SC.Resend onClick={() => resend(email)}>{t('authorization.resendEmail')}</SC.Resend>
          <SC.Cancel onClick={cancel}>{t('authorization.cancelChangeEmail')}</SC.Cancel>
        </SC.ButtonBlock>
      </SC.Wrapper>
    </SC.Container>
  );
};

export default ConfirmPrimaryEmail;
