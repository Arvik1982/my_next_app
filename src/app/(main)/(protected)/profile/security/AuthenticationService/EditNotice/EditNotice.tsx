'use client';

import * as SC from './EditNotice.style';
import * as SCASG from '../AuthenticationServiceGlobal.style';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

const EditNotice = () => {
  const { t } = useTranslation();
  const TELEGRAM_ICON_SIZE_WIDTH = 28;
  const TELEGRAM_ICON_SIZE_HEIGHT = 23;
  return (
    <SCASG.PaperContainer>
      <SCASG.Title>{t('authentication.setupNoticeTitle')}</SCASG.Title>
      <SCASG.ServicesContainer>
        <SCASG.ServicesContentDisabled>
          <SC.TelegramWrapper>
            <Image
              src={'/images/telegram.svg'}
              alt={'telegram'}
              width={TELEGRAM_ICON_SIZE_WIDTH}
              height={TELEGRAM_ICON_SIZE_HEIGHT}
            />
          </SC.TelegramWrapper>
          <SCASG.textContent>
            <SCASG.Accounts>Telegram</SCASG.Accounts>
            <SCASG.Prompt>{t('authentication.weChatText')}</SCASG.Prompt>
          </SCASG.textContent>
        </SCASG.ServicesContentDisabled>
        <SCASG.Start>{t('authentication.startSoon')}</SCASG.Start>
      </SCASG.ServicesContainer>
    </SCASG.PaperContainer>
  );
};

export default EditNotice;
