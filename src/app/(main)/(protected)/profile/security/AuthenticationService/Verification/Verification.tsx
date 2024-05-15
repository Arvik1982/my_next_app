'use client';

import * as SCASG from '../AuthenticationServiceGlobal.style';
import Services from '../Services/Services';
import Image from 'next/image';
import React, { FC } from 'react';
import { Props } from './Verification.type';
import { useTranslation } from 'react-i18next';

const Verification: FC<Props> = ({ gosuslugiChecked, gosuslugiToggle }) => {
  const { t } = useTranslation();
  const ICON_SIZE = 44;
  return (
    <SCASG.PaperContainer>
      <SCASG.Title>{t('authentication.verification')}</SCASG.Title>
      <SCASG.Recommendations>{t('authentication.recommendations')}</SCASG.Recommendations>
      {/* <Services
        nameService={'Госуслуги'}
        checked={gosuslugiChecked}
        onClickSwitch={gosuslugiToggle}
        icon={'/images/gosuslugiColor.svg'}
        recommendations={'Пройдите верификацию через портал Госуслуг '}
      /> */}
      <SCASG.ServicesContainer>
        <SCASG.ServicesContentDisabled>
          <Image src={'/images/gosuslugiColor.svg'} alt={'gosuslugi'} width={ICON_SIZE} height={ICON_SIZE} />
          <SCASG.textContent>
            <SCASG.Accounts>{'Госуслуги'}</SCASG.Accounts>
            <SCASG.Prompt>{'Пройдите верификацию через портал Госуслуг'}</SCASG.Prompt>
          </SCASG.textContent>
        </SCASG.ServicesContentDisabled>
        <SCASG.Start>{t('authentication.startSoon')}</SCASG.Start>
      </SCASG.ServicesContainer>
      <SCASG.ServicesContainer>
        <SCASG.ServicesContentDisabled>
          <Image src={'/images/weChat.svg'} alt={'WeChat'} width={ICON_SIZE} height={ICON_SIZE} />
          <SCASG.textContent>
            <SCASG.Accounts>{t('authentication.weChat')}</SCASG.Accounts>
            <SCASG.Prompt>{t('authentication.weChatText')}</SCASG.Prompt>
          </SCASG.textContent>
        </SCASG.ServicesContentDisabled>
        <SCASG.Start>{t('authentication.startSoon')}</SCASG.Start>
      </SCASG.ServicesContainer>
    </SCASG.PaperContainer>
  );
};

export default Verification;
