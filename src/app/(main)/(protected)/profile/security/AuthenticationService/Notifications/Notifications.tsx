'use client';
import * as React from 'react';
import * as SC from './Notifications.style';
import { FC } from 'react';
import Image from 'next/image';
import { PropsNotifications } from './Notifications.type';

const Notifications: FC<PropsNotifications> = ({ text }) => {
  const ICON_SIZE = 24;
  return (
    <SC.Container>
      <Image src={'/images/checkGreen.svg'} alt={'checkGreen'} width={ICON_SIZE} height={ICON_SIZE} />
      {text}
    </SC.Container>
  );
};

export default Notifications;
