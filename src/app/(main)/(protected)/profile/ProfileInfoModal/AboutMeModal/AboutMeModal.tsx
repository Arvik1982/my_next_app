import React, { FC } from 'react';
import * as SC from './AboutMeModal.style';
import ProfileInfoModal from '../ProfileInfoModal';
import { AboutMeModalProps } from './AboutMeModal.type';
import { useTranslation } from 'react-i18next';

const AboutMeModal: FC<AboutMeModalProps> = ({ exit, specialist, open }) => {
  const { t } = useTranslation();
  const fullName = `${specialist.first_name} ${specialist.second_name}`;
  return (
    <ProfileInfoModal exit={exit} open={open}>
      <SC.Title>{t('specialists.aboutMe')}</SC.Title>
      <SC.TextContentWrapper>
        <SC.LabelTextContent>{t('specialists.aboutMe')}</SC.LabelTextContent>
        <SC.TextContent>{t('specialists.aboutYourselfText', { name: fullName })}</SC.TextContent>
      </SC.TextContentWrapper>
    </ProfileInfoModal>
  );
};

export default AboutMeModal;
