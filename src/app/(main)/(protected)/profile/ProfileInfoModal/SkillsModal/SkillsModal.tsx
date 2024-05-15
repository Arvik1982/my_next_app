import { FC } from 'react';
import * as SC from './SkillsModal.style';
import ProfileInfoModal from '../ProfileInfoModal';
import { SkillsModalProps } from './SkillsModal.type';
import { useTranslation } from 'react-i18next';

const KEYWORDS = ['UI/UX', 'HTML5', 'CSS3'];

const SkillsModal: FC<SkillsModalProps> = ({ exit, specialist, open }) => {
  const { t } = useTranslation();

  return (
    <ProfileInfoModal exit={exit} open={open}>
      <SC.Title>{t('specialists.skills')}</SC.Title>
      <SC.SkillsContainer>
        {KEYWORDS.map((skill) => {
          return <SC.Skill key={skill}>{skill}</SC.Skill>;
        })}
      </SC.SkillsContainer>
    </ProfileInfoModal>
  );
};

export default SkillsModal;
