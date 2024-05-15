import { InfoSlidingModal } from '../InfoSlidingModal/InfoSlidingModal';
import Container from './Container/Container';
import * as SC from './Info.style';
import { useTranslation } from 'react-i18next';

const Info = () => {
  const { t } = useTranslation();
  const personalInfo = [
    {
      title: t('profile.aboutYourself'),
      subtitle: t('profile.addInfo'),
      pageName: 'main',
    },
    {
      title: t('profile.contacts'),
      subtitle: t('profile.addContact'),
      pageName: 'contacts',
    },
    {
      title: t('profile.links'),
      subtitle: t('profile.addLink'),
      pageName: 'contacts',
    },
  ];

  const moreInfo = [
    {
      title: t('profile.experience'),
      subtitle: t('profile.addExperience'),
      pageName: 'experience',
    },
    {
      title: t('profile.education'),
      subtitle: t('profile.addEducation'),
      pageName: 'education',
    },
    {
      title: t('profile.skills'),
      subtitle: t('profile.addSkill'),
      pageName: 'skills',
    },
  ];

  return (
    <SC.StyledBox>
      <Container items={personalInfo} />
      <Container items={moreInfo} bottomInfo />
      <InfoSlidingModal />
    </SC.StyledBox>
  );
};

export default Info;
