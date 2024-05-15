import React, { FC } from 'react';
import { SkillsProps } from './Skills.types';
import * as SC from './Skills.style';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const KEYWORDS = ['UI/UX', 'HTML5', 'CSS3'];

const Skills: FC<SkillsProps> = ({ specialist, openSkillsModal }) => {
  const ICON_SIZE = 16;
  const { t } = useTranslation();

  return (
    <SC.Wrapper>
      <SC.TitleBlock onClick={openSkillsModal}>
        <SC.Title>{t('specialists.skills')}</SC.Title>
        <Image src={'/images/arrow-right.svg'} alt='arrow-right icon' width={ICON_SIZE} height={ICON_SIZE} />
      </SC.TitleBlock>
      <SC.InfoBlock>
        {KEYWORDS.map((skill) => (
          <SC.ItemBlock key={skill}>
            <SC.Item>{skill}</SC.Item>
          </SC.ItemBlock>
        ))}
      </SC.InfoBlock>
    </SC.Wrapper>
  );
};

export default Skills;
