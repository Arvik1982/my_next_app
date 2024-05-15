'use client';
import { FC } from 'react';
import * as SC from './Education.style';
import { EducationProps } from './Education.type';
import Image from 'next/image';
import EducationCard from '../../EducationCard/EducationCard';
import { useTranslation } from 'react-i18next';

const education = [
  {
    name: 'МГТУ им. Н.Э. Баумана',
    faculty: 'Программное обеспечение ЭВМ, информационные технологии',
    dates: { startMonth: 'Сентябрь', startYear: 2020, endMonth: 'Июнь', endYear: 2023 },
  },
  {
    name: 'MDA',
    faculty: 'Веб-дизайн Pro',
    dates: { startMonth: 'Сентябрь', startYear: 2020, endMonth: 'Июнь', endYear: 2023 },
  },
];

const Education: FC<EducationProps> = ({ specialist, openEducationModal }) => {
  const ICON_SIZE = 16;
  const { t } = useTranslation();
  return (
    <SC.Wrapper>
      <SC.TitleBlock onClick={openEducationModal}>
        <SC.Title>{t('specialists.education')}</SC.Title>
        <Image src={'/images/arrow-right.svg'} alt='arrow-right icon' width={ICON_SIZE} height={ICON_SIZE} />
      </SC.TitleBlock>

      {education.map((ed, index, arr) => {
        return (
          <SC.Content key={index}>
            <EducationCard key={ed.name} name={ed.name} faculty={ed.faculty} dates={ed.dates} />
            {index < arr.length - 1 && (
              <SC.ImageBlock>
                <Image src={'/images/line-horizontal.svg'} alt='line icon' width={300} height={33} />
              </SC.ImageBlock>
            )}
          </SC.Content>
        );
      })}
    </SC.Wrapper>
  );
};

export default Education;
