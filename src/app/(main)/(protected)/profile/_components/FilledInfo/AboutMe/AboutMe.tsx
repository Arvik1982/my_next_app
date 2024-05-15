import React, { FC } from 'react';
import { AboutMeProps } from './AboutMe.types';
import * as SC from './AboutMe.style';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const AboutMe: FC<AboutMeProps> = ({ specialist, openAboutMeModal }) => {
  const ICON_SIZE = 16;
  const { t } = useTranslation();
  const fullName = `${specialist.first_name} ${specialist.second_name}`;
  return (
    <SC.Wrapper>
      <SC.TitleBlock onClick={openAboutMeModal}>
        <SC.Title>{t('specialists.aboutMe')}</SC.Title>
        <Image src={'/images/arrow-right.svg'} alt='arrow-right icon' width={ICON_SIZE} height={ICON_SIZE} />
      </SC.TitleBlock>
      <SC.InfoBlock>
        <SC.Info>{t('specialists.aboutYourselfText', { name: fullName })}</SC.Info>
        <SC.More onClick={openAboutMeModal}>{t('specialists.more')}</SC.More>
      </SC.InfoBlock>
    </SC.Wrapper>
  );
};

export default AboutMe;
