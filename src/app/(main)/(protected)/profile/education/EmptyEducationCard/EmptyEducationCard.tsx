import { Button, EmptyCard } from '@/app/components';
import Image from 'next/image';
import { FC } from 'react';
import { EmptyExperienceCardProps } from '../../experience/_components/EmptyExperienceCard/EmptyExperienceCard.type';

export const EmptyEducationCard: FC<EmptyExperienceCardProps> = ({ setOpen }) => {
  const MAIN_TEXT = 'Здесь пока ничего нет',
    SECONDARY_TEXT = 'Добавьте образование, это поможет людям лучше понять, что вы за специалист',
    ICON_SIZE = 24;

  return (
    <EmptyCard mainText={MAIN_TEXT} secondaryText={SECONDARY_TEXT} icon={'/images/building-black.svg'}>
      <Button
        onClick={() => setOpen(true)}
        startIcon={<Image src='/images/plus.svg' alt='plus-icon' width={ICON_SIZE} height={ICON_SIZE} />}
      >
        Добавить образование
      </Button>
    </EmptyCard>
  );
};
