import { FC, useState } from 'react';
import * as SC from '../../ExperienceCard.style';
import Image from 'next/image';
import { ExperienceCardProps } from '../../ExperienceCard.type';
import { JobTitlesProps } from '../JobTitleCard.type';
import { ExperiencePopup } from '../ExperiencePopup/ExperiencePopup';

export const SingleJobTitleCard: FC<ExperienceCardProps & JobTitlesProps> = ({
  company,
  companiesLogos,
  displayPopup,
  FormatWorkDuration,
}) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const LOGO_SIZE = 44;
  const ICON_SIZE = 24;
  const logoExists = !!companiesLogos[company.name.toLowerCase() as keyof object];

  return (
    <SC.CardContainer>
      <SC.CardRow>
        <SC.Logo>
          <Image
            src={logoExists ? companiesLogos[company.name.toLowerCase() as keyof object] : '/images/suitcaseBlack.svg'}
            alt='logo'
            width={logoExists ? LOGO_SIZE : ICON_SIZE}
            height={logoExists ? LOGO_SIZE : ICON_SIZE}
          />
        </SC.Logo>
        <SC.InfoContainer>
          <SC.TextBlock>
            <SC.MainText>{company.jobTitles[0].jobTitle}</SC.MainText>
            <SC.MiddleText>{`${company.name} ${company.country}`}</SC.MiddleText>
            <SC.BottomText>
              {FormatWorkDuration(company.jobTitles[0].startDate, company.jobTitles[0].startDate)}
            </SC.BottomText>
          </SC.TextBlock>
          {displayPopup && (
            <SC.MoreButton onClick={() => setPopupOpen(!popupOpen)}>
              <Image src='/images/more.svg' alt='more' width={ICON_SIZE} height={ICON_SIZE} />
            </SC.MoreButton>
          )}
          <ExperiencePopup open={popupOpen} setOpen={setPopupOpen} />
        </SC.InfoContainer>
      </SC.CardRow>
    </SC.CardContainer>
  );
};
