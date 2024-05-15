import * as SC from './EducationCard.style';

import Image from 'next/image';
import { IconButton, Stack } from '@mui/material';
import { FC } from 'react';
import { Props } from './EducationCard.type';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';

const EducationCard: FC<Props> = ({ name, faculty, dates, logo }) => {
  const ICON_SIZE = 24;
  const LOGO_SIZE = 44;
  const DEFAULT_LOGO = '/images/building.svg';
  const { t } = useTranslation();
  const studyStart = `${dates.startMonth} ${dates.startYear}`;
  const studyEnd = `${dates.endMonth} ${dates.endYear}`;
  const yearsOfStudy = dates.endYear - dates.startYear;
  const studyPeriod = `${studyStart} - ${studyEnd} \u00B7 ${yearsOfStudy} ${t('education.yearCut')}`;
  const pathname = usePathname();
  return (
    <SC.StyledListItem
      secondaryAction={
        pathname === '/profile' ? (
          <IconButton aria-label='etc' disableRipple>
            <Image src={'/images/more.svg'} alt='etc' width={ICON_SIZE} height={ICON_SIZE} />
          </IconButton>
        ) : (
          ''
        )
      }
    >
      <SC.Logo>
        {logo ? (
          <Image src={logo} alt='logo' width={LOGO_SIZE} height={LOGO_SIZE} />
        ) : (
          <Image src={DEFAULT_LOGO} alt='logo' width={ICON_SIZE} height={ICON_SIZE} />
        )}
      </SC.Logo>
      <Stack spacing={0.1}>
        <SC.Text primary={name} secondary={faculty} />
        <SC.DatesText>{studyPeriod}</SC.DatesText>
      </Stack>
    </SC.StyledListItem>
  );
};

export default EducationCard;
