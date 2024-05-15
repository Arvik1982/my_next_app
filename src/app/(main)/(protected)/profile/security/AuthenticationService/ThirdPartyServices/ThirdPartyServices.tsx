'use client';
import * as SCASG from '../AuthenticationServiceGlobal.style';
import Services from '../Services/Services';
import React, { FC, useState } from 'react';
import { PropsThirdPartyServices } from './ThirdPartyServices.type';
import { useTranslation } from 'react-i18next';
import { SnackbarAlert } from '@/app/components';
import DisableNetwork from './DisableNetwork/DisableNetwork';
import Image from 'next/image';

const ThirdPartyServices: FC<PropsThirdPartyServices> = ({
  gosuslugiChecked,
  gosuslugiToggle,
  openWindow,
  setOpenWindow,
}) => {
  const ICON_SIZE = 44;
  const { t } = useTranslation();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [networkChecked, setNetworkChecked] = useState<{ [network: string]: boolean }>({
    Vkontakte: false,
    Яндекс: false,
    Google: false,
  });
  const [networkName, setNetworkName] = useState('');

  const networkToggle = (network: string) => {
    if (networkChecked[network]) {
      setNetworkName(network);
      setOpenWindow('DisableNetwork');
    } else {
      setNetworkChecked((prev) => ({
        ...prev,
        [network]: true,
      }));
      setSnackbarOpen(true);
      setSnackbarMessage(t('snackbar.networkOn', { network }));
    }
  };

  const disableNetwork = (network: string) => {
    setNetworkChecked((prev) => ({
      ...prev,
      [network]: false,
    }));
    setOpenWindow('');
    setSnackbarOpen(true);
    setSnackbarMessage(t('snackbar.networkOff', { network }));
  };

  const exit = () => setOpenWindow('');

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  return (
    <SCASG.PaperContainer>
      <SCASG.Title>{t('authentication.signInTitle')}</SCASG.Title>
      <Services
        checked={networkChecked.Vkontakte}
        recommendations={t('authentication.vk')}
        nameService={'Vkontakte'}
        onClickSwitch={networkToggle}
        icon={'/images/vk.svg'}
      />
      {/* <Services
        onClickSwitch={gosuslugiToggle}
        nameService={'Госуслуги'}
        icon={'/images/gosuslugiColor.svg'}
        checked={gosuslugiChecked}
        recommendations={t('authentication.gosuslugi')}
      /> */}
      <Services
        checked={networkChecked.Яндекс}
        onClickSwitch={networkToggle}
        nameService={'Яндекс'}
        icon={'/images/yandex.svg'}
        recommendations={t('authentication.yandex')}
      />
      <Services
        checked={networkChecked.Google}
        onClickSwitch={networkToggle}
        nameService={'Google'}
        icon={'/images/google.svg'}
        recommendations={t('authentication.google')}
      />

      <SCASG.ServicesContainer>
        <SCASG.ServicesContentDisabled>
          <Image src={'/images/gosuslugiColor.svg'} alt={'gosuslugi'} width={ICON_SIZE} height={ICON_SIZE} />
          <SCASG.textContent>
            <SCASG.Accounts>{'Госуслуги'}</SCASG.Accounts>
            <SCASG.Prompt>{t('authentication.gosuslugi')}</SCASG.Prompt>
          </SCASG.textContent>
        </SCASG.ServicesContentDisabled>
        <SCASG.Start>{t('authentication.startSoon')}</SCASG.Start>
      </SCASG.ServicesContainer>

      <DisableNetwork
        network={networkName}
        open={openWindow === 'DisableNetwork'}
        exit={exit}
        disable={disableNetwork}
      />
      <SnackbarAlert onClose={handleSnackbarClose} open={snackbarOpen} message={snackbarMessage} />
    </SCASG.PaperContainer>
  );
};

export default ThirdPartyServices;
