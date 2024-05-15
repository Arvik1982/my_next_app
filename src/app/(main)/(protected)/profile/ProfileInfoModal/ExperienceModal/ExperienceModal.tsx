'use client';
import React, { FC } from 'react';
import ProfileInfoModal from '../ProfileInfoModal';
import * as SC from './ExperienceModal.style';
import { ExperienceCardProps } from '@/app/(main)/(protected)/profile/experience/_components/ExperienceCard/ExperienceCard.type';
import { ExperienceCard } from '@/app/(main)/(protected)/profile/experience/_components/ExperienceCard/ExperienceCard';
import { ExperienceModalProps } from './ExperienceModal.type';

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

const ExperienceModal: FC<ExperienceModalProps> = ({ exit, specialist, open }) => {
  return (
    <ProfileInfoModal exit={exit} open={open}>
      <SC.Title>Опыт 3 года</SC.Title>
      {companies.map((item, index) => {
        return (
          <SC.Content key={index}>
            <ExperienceCard key={index} company={item} />
          </SC.Content>
        );
      })}
    </ProfileInfoModal>
  );
};

export default ExperienceModal;
