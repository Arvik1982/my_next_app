import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Stack from '@mui/material/Stack';
import { Button, Typography } from '@mui/material';
export interface ICalendarToolbar {
  locale: 'en-US' | 'ru';
  defaultDate: Date;
}

const monthNames = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

export default function CalendarToolbar({ locale, defaultDate }: ICalendarToolbar) {
  const { t } = useTranslation();

  let month = defaultDate.toLocaleDateString(locale, { month: 'long' });

  if (locale === 'ru') {
    month = monthNames[defaultDate.getMonth()];
  }
  const year = useMemo(() => defaultDate.getFullYear(), [defaultDate]);

  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ padding: '9px 20px', minHeight: 35 }}
    >
      <Stack direction='row'>
        <Typography variant='h5'>{month},&nbsp;</Typography>
        <Typography variant='h5' color='#9E9E9E'>
          {year}
        </Typography>
      </Stack>
      <Stack direction='row' spacing={2}>
        <Button color='inherit' sx={{ padding: 0, minWidth: 10 }}>
          &#65124;
        </Button>
        <Button color='inherit' sx={{ padding: '0 2px' }}>
          {t('calendar.today')}
        </Button>
        <Button color='inherit' sx={{ padding: 0, minWidth: 10 }}>
          &#65125;
        </Button>
      </Stack>
    </Stack>
  );
}
