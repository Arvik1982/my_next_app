import { useState } from 'react';
import { EmptyEducationCard } from './EmptyEducationCard/EmptyEducationCard';
import * as SC from './ExperienceTab.style';
import EducationModal from '../_components/EducationModal/EducationModal';
import EducationCard from '../_components/EducationCard/EducationCard';
import Image from 'next/image';
import { ButtonGreyWithIcon } from '@/app/components';
export const EducationTab = () => {
  const [open, setOpen] = useState(false);
  const ICON_SIZE = 24;
  const educations = [
    {
      name: 'МГТУ им. Н.Э. Баумана',
      faculty: 'Программное обеспечение ЭВМ, информационные технологии',
      dates: { startMonth: 'Сентябрь', startYear: 2020, endMonth: 'Июнь', endYear: 2023 },
    },
  ];

  return (
    <SC.TabContainer>
      {educations.length ? (
        <>
          {educations.map((education) => (
            <EducationCard
              key={education.name}
              name={education.name}
              faculty={education.faculty}
              dates={education.dates}
            />
          ))}
          <SC.AddButtonDiv>
            <ButtonGreyWithIcon name='Добавить образование' onClick={() => setOpen(true)}>
              <Image src='/images/plusBlack.svg' alt='plus' width={ICON_SIZE} height={ICON_SIZE} />
            </ButtonGreyWithIcon>
          </SC.AddButtonDiv>
        </>
      ) : (
        <EmptyEducationCard setOpen={setOpen} />
      )}
      <EducationModal open={open} setOpen={setOpen} />
    </SC.TabContainer>
  );
};
