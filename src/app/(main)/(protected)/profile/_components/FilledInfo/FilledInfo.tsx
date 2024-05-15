import { FC } from 'react';
import { FilledInfoProps } from './FilledInfo.types';
import * as SC from './FilledInfo.style';
import AboutMe from './AboutMe/AboutMe';
import Image from 'next/image';
import Contacts from './Contacts/Contacts';
import Links from './Links/Links';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import Skills from './Skills/Skills';
import { useTranslation } from 'react-i18next';

const DATE = '12 мая 2022';

const FilledInfo: FC<FilledInfoProps> = ({
  specialist,
  openAboutMeModal,
  openContactsModal,
  openLinksModal,
  openExperienceModal,
  openEducationModal,
  openSkillsModal,
}) => {
  const { t } = useTranslation();
  return (
    <SC.StyledBox>
      <SC.Wrapper>
        <AboutMe specialist={specialist} openAboutMeModal={openAboutMeModal} />
        <SC.ImageBlock>
          <Image src={'/images/line-horizontal.svg'} alt='line icon' width={400} height={33} />
        </SC.ImageBlock>
        <Contacts specialist={specialist} openContactsModal={openContactsModal} />
        <SC.ImageBlock>
          <Image src={'/images/line-horizontal.svg'} alt='line icon' width={400} height={33} />
        </SC.ImageBlock>
        <Links specialist={specialist} openLinksModal={openLinksModal} />
      </SC.Wrapper>
      <SC.Wrapper>
        <Experience specialist={specialist} openExperienceModal={openExperienceModal} />
        <SC.ImageBlock>
          <Image src={'/images/line-horizontal.svg'} alt='line icon' width={400} height={33} />
        </SC.ImageBlock>
        <Education specialist={specialist} openEducationModal={openEducationModal} />
        <SC.ImageBlock>
          <Image src={'/images/line-horizontal.svg'} alt='line icon' width={400} height={33} />
        </SC.ImageBlock>
        <Skills specialist={specialist} openSkillsModal={openSkillsModal} />
        <SC.ImageBlock>
          <Image src={'/images/line-horizontal.svg'} alt='line icon' width={400} height={33} />
        </SC.ImageBlock>
        <SC.Bottom>
          <div>{t('specialists.onSiteSince', { date: DATE })}</div>
          <SC.Button>{t('specialists.complain')}</SC.Button>
        </SC.Bottom>
      </SC.Wrapper>
    </SC.StyledBox>
  );
};

export default FilledInfo;
