'use client';
import React, { FC } from 'react';
import ProfileInfoModal from '../ProfileInfoModal';
import * as SC from './EducationModal.style';
import { EducationModalProps } from './EducationModal.type';
import { useTranslation } from 'react-i18next';
import EducationCard from '../../_components/EducationCard/EducationCard';

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

const EducationModal: FC<EducationModalProps> = ({ exit, specialist, open }) => {
  const { t } = useTranslation();
  return (
    <ProfileInfoModal exit={exit} open={open}>
      <SC.Title>{t('specialists.education')}</SC.Title>
      {education.map((ed, index) => {
        return (
          <SC.Content key={index}>
            <EducationCard key={ed.name} name={ed.name} faculty={ed.faculty} dates={ed.dates} />
          </SC.Content>
        );
      })}
    </ProfileInfoModal>
  );
};

export default EducationModal;
