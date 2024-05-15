import { FC } from 'react';
import { ExperienceCardProps } from '../../ExperienceCard.type';
import * as SC from '../../ExperienceCard.style';
import Image from 'next/image';
import { JobTitlesProps } from '../JobTitleCard.type';
import { MultiJobTitleRow } from '../MultiJobTitleRow/MultiJobTitleRow';

export const MultiJobTileCard: FC<ExperienceCardProps & JobTitlesProps> = ({
  company,
  companiesLogos,
  displayPopup,
  FormatWorkDuration,
}) => {
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
            <SC.MainText>{`${company.name} - ${company.country}`}</SC.MainText>
            <SC.BottomText>
              {FormatWorkDuration(
                company.jobTitles[company.jobTitles.length - 1].startDate,
                company.jobTitles[0].endDate,
                true,
              )}
            </SC.BottomText>
          </SC.TextBlock>
        </SC.InfoContainer>
      </SC.CardRow>
      {company.jobTitles.map((el, i) => (
        <MultiJobTitleRow
          jobTitle={el}
          key={`${company.name}-${i}`}
          companyName={company.name}
          index={i}
          displayPopup={displayPopup}
          companiesLogos={companiesLogos}
          FormatWorkDuration={FormatWorkDuration}
        />
      ))}
    </SC.CardContainer>
  );
};
