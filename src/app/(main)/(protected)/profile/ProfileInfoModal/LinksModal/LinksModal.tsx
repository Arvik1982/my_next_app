import React, { FC } from 'react';
import ProfileInfoModal from '../ProfileInfoModal';
import Image from 'next/image';
import * as SC from './LinksModal.style';
import { LinksModalProps } from './LinksModal.type';
import { useTranslation } from 'react-i18next';

const networks = ['Telegram', 'Habr'];

const LinksModal: FC<LinksModalProps> = ({ exit, open, specialist }) => {
  const ICON_SIZE = 10;
  const { t } = useTranslation();

  return (
    <ProfileInfoModal exit={exit} open={open}>
      <SC.Title>{t('specialists.links')}</SC.Title>
      <SC.LinkContainer>
        {networks.map((i) => {
          return (
            <SC.Link key={i}>
              {i}
              <Image src={'/images/vector-link.svg'} alt={'vector-link'} width={ICON_SIZE} height={ICON_SIZE} />
            </SC.Link>
          );
        })}
      </SC.LinkContainer>
    </ProfileInfoModal>
  );
};

export default LinksModal;
