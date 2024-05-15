import { FC, useState } from 'react';
import * as SC from '../../ExperienceCard.style';
import Image from 'next/image';
import { JobTitlesProps } from '../JobTitleCard.type';
import { ExperiencePopup } from '../ExperiencePopup/ExperiencePopup';
import { MultiJobTitlesProps } from './MultiJobTitleRow.type';

export const MultiJobTitleRow: FC<JobTitlesProps & MultiJobTitlesProps> = ({
  companyName,
  index,
  jobTitle,
  displayPopup,
  FormatWorkDuration,
}) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const ICON_SIZE = 24;

  return (
    <SC.CardRow withoutImage key={`${companyName}_${index}`}>
      <SC.TreeVector offset={index}></SC.TreeVector>
      <SC.InfoContainer>
        <SC.TextBlock>
          <SC.MainText>{jobTitle.jobTitle}</SC.MainText>
          <SC.BottomText>{FormatWorkDuration(jobTitle.startDate, jobTitle.endDate)}</SC.BottomText>
        </SC.TextBlock>
        {displayPopup && (
          <SC.MoreButton onClick={() => setPopupOpen(!popupOpen)}>
            <Image src='/images/more.svg' alt='more' width={ICON_SIZE} height={ICON_SIZE} />
          </SC.MoreButton>
        )}
        <ExperiencePopup open={popupOpen} setOpen={setPopupOpen} />
      </SC.InfoContainer>
    </SC.CardRow>
  );
};
