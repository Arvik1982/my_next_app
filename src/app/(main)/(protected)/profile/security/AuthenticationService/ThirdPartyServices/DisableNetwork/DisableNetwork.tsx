'use client';
import LoginSecurityWindow from '@/app/components/ui/LoginSecurityWindow/LoginSecurityWindow';
import * as SC from './DisableNetwork.style';
import * as GSC from '../../AuthenticationServiceGlobal.style';
import { Button } from '@/app/components';
import ButtonGrey from '@/app/components/ui/ButtonGrey/ButtonGrey';
import { FC } from 'react';
import { PropsDisableNetwork } from './DisableNetwork.type';
import { useTranslation } from 'react-i18next';

const DisableNetwork: FC<PropsDisableNetwork> = ({ exit, open, disable, network }) => {
  const { t } = useTranslation();

  return (
    <LoginSecurityWindow open={open} exit={exit}>
      <SC.Container>
        <SC.Title>{t('authentication.disableLoginNetworkTitle', { network })}</SC.Title>
        <SC.Recommendations>{t('authentication.disableLoginNetwork', { network })}</SC.Recommendations>
        <GSC.ButtonGroup>
          <Button fullWidth onClick={() => disable(network)}>
            <GSC.ButtonText>{t('authentication.disconnect')}</GSC.ButtonText>
          </Button>
          <ButtonGrey fullWidth onClick={exit}>
            {t('authentication.cancel')}
          </ButtonGrey>
        </GSC.ButtonGroup>
      </SC.Container>
    </LoginSecurityWindow>
  );
};

export default DisableNetwork;
