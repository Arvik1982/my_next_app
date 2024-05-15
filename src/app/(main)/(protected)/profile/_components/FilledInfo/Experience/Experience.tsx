'use client';
import { FC } from 'react';
import * as SC from './Experience.style';
import { ExperienceCardProps } from '../../../experience/_components/ExperienceCard/ExperienceCard.type';
import { ExperienceCard } from '../../../experience/_components/ExperienceCard/ExperienceCard';
import { ExperienceProps } from './Experience.type';
import Image from 'next/image';

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

const Experience: FC<ExperienceProps> = ({ specialist, openExperienceModal }) => {
  const ICON_SIZE = 16;
  return (
    <SC.Wrapper>
      <SC.TitleBlock onClick={openExperienceModal}>
        <SC.Title>Опыт 3 года</SC.Title>
        <Image src={'/images/arrow-right.svg'} alt='arrow-right icon' width={ICON_SIZE} height={ICON_SIZE} />
      </SC.TitleBlock>
      {companies.map((item, index, arr) => {
        return (
          <SC.Content key={index}>
            <ExperienceCard company={item} />
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

export default Experience;
