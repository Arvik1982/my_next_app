'use client';

import { MUIButton } from '@/app/(main)/_components/Header/Header.style';
import { EmptyCard } from '@/app/components';
import { EmptyExperienceCardProps } from './EmptyExperienceCard.type';
import { FC } from 'react';
import Image from 'next/image';

export const EmptyExperienceCard: FC<EmptyExperienceCardProps> = ({ setOpen }) => {
  const ICON_SIZE = 24;

  return (
    <EmptyCard
      icon='/images/suitcaseBlack.svg'
      mainText='Здесь пока ничего нет'
      secondaryText='Добавьте опыт работы, это поможет людям лучше понять, что вы за специалист'
    >
      <MUIButton
        disableRipple
        onClick={() => setOpen(true)}
        startIcon={<Image src='/images/plus.svg' alt='plus-icon' width={ICON_SIZE} height={ICON_SIZE} />}
      >
        Добавить опыт
      </MUIButton>
    </EmptyCard>
  );
};
