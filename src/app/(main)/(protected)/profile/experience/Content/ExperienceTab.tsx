'use client';

import { useState } from 'react';
import { EmptyExperienceCard } from '../_components/EmptyExperienceCard/EmptyExperienceCard';
import * as SC from './ExperienceTab.style';
import { AddExperienceModal } from '../../../profile/experience/_components/AddExperienceModal/AddExperienceModal';
import { ExperienceCard } from '../_components/ExperienceCard/ExperienceCard';
import { ButtonGreyWithIcon } from '@/app/components';
import Image from 'next/image';
import { ExperienceCardProps } from '../_components/ExperienceCard/ExperienceCard.type';

const companies: ExperienceCardProps['company'][] | null = [
  {
    name: 'Яндекс',
    country: 'Россия',
    city: 'Москва',
    jobTitles: [
      {
        jobTitle: 'Старший Cтарший',
        startDate: '2010 08',
        endDate: '2012 03',
      },
      {
        jobTitle: 'Старший дизайнер',
        startDate: '2005 10',
        endDate: '2008 08',
      },
      {
        jobTitle: 'Дизайнер',
        startDate: '2004 02',
        endDate: '2005 10',
      },
    ],
  },
  {
    name: 'VK',
    country: 'Россия',
    city: 'Москва',
    jobTitles: [
      {
        jobTitle: 'Синьор программист',
        startDate: '2012 01',
        endDate: '2013 01',
      },
      {
        jobTitle: 'Мидл программист',
        startDate: '2012 01',
        endDate: '2012 01',
      },
    ],
  },
  {
    name: 'VSS',
    country: 'Германия',
    city: 'Берлин',
    jobTitles: [
      {
        jobTitle: 'Синьор программист',
        startDate: '2013 06',
        endDate: 'настоящее время',
      },
    ],
  },
];

export const ExperienceTab = () => {
  const [open, setOpen] = useState(false);
  const ICON_SIZE = 24;

  return (
    <SC.Container>
      {companies.length ? (
        <>
          {companies.map((company) => (
            <ExperienceCard company={company} displayPopup key={company.name} />
          ))}
          <SC.AddButtonDiv>
            <ButtonGreyWithIcon name='Добавить опыт работы' onClick={() => setOpen(true)}>
              <Image src='/images/plusBlack.svg' alt='plus' width={ICON_SIZE} height={ICON_SIZE} />
            </ButtonGreyWithIcon>
          </SC.AddButtonDiv>
        </>
      ) : (
        <EmptyExperienceCard setOpen={setOpen} />
      )}
      <AddExperienceModal setOpen={setOpen} open={open} />
    </SC.Container>
  );
};
