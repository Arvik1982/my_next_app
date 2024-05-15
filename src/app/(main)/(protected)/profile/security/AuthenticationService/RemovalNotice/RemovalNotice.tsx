import React, { FC } from 'react';
import { Button, ButtonGrey, LoginSecurityWindow } from '@/app/components';
import * as SC from './RemovalNotice.style';
import * as GSC from '../AuthenticationServiceGlobal.style';
import { PropsRemovalNotice } from './RemovalNotice.type';
import { useTranslation } from 'react-i18next';

const RemovalNotice: FC<PropsRemovalNotice> = ({ cancel, remove, exit }) => {
  const { t } = useTranslation();
  return (
    <LoginSecurityWindow open={true} exit={exit}>
      <SC.Container>
        <SC.Title>{t('authentication.removeNoticeTitle')}</SC.Title>
        <SC.Recommendations>{t('authentication.removeNotice')}</SC.Recommendations>
        <GSC.ButtonGroup>
          <Button fullWidth onClick={remove}>
            <GSC.ButtonText>{t('authentication.remove')}</GSC.ButtonText>
          </Button>
          <ButtonGrey fullWidth onClick={cancel}>
            {t('authentication.cancel')}
          </ButtonGrey>
        </GSC.ButtonGroup>
      </SC.Container>
    </LoginSecurityWindow>
  );
};

export default RemovalNotice;
