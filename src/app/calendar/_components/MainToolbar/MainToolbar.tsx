'use client';

import * as SC from './MainToolbar.style';
import Locale from '../Locale/Locale';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

export default function MainToolbar() {
  const [value, setValue] = useState('');

  const { t } = useTranslation();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.alert(value);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <Stack>
      <Stack
        direction='row'
        spacing={2}
        useFlexGap
        flexWrap='nowrap'
        alignItems='center'
        justifyContent='space-between'
        minHeight='74px'
        padding='1rem 0'
      >
        <Stack direction='row' spacing={2} useFlexGap flexWrap='nowrap' alignItems='center' flexGrow={0}>
          <Typography variant='h4' color='#fff'>
            {t('calendar.head')}
          </Typography>
          <StarIcon sx={{ fontSize: 28 }} />
        </Stack>
        <Stack direction='row' spacing={2} useFlexGap flexWrap='nowrap' alignItems='center' flexGrow={1}>
          <Button variant='contained' color='green' sx={{ height: '39px' }}>
            {t('calendar.create')}
          </Button>
          <SC.SearchForm onSubmit={(e) => handleSubmit(e)}>
            <SC.SearchLabel htmlFor='search'>
              <SC.Search
                id='search-input'
                type='text'
                placeholder={t('calendar.search')}
                autoFocus
                autoComplete='off'
                value={value}
                onChange={(e) => handleChange(e)}
              />
              <SC.SearchBtn type='submit' title='search-btn'>
                <SearchIcon sx={{ color: '#FFF' }} />
              </SC.SearchBtn>
            </SC.SearchLabel>
          </SC.SearchForm>
        </Stack>
        <Stack direction='row' spacing={1} useFlexGap flexWrap='nowrap' alignItems='center' flexGrow={0}>
          <SC.CalendarBtn type='button' title='calendar-btn'>
            {t('calendar.calendars')}
          </SC.CalendarBtn>
          <SC.SettingBtn type='button' title='setting-btn'>
            <SettingsIcon sx={{ color: '#fff' }} />
          </SC.SettingBtn>
          <Locale />
        </Stack>
      </Stack>
      <Divider color='#fff' />
      <Stack
        direction='row'
        spacing={2}
        useFlexGap
        flexWrap='nowrap'
        alignItems='center'
        justifyContent='flex-end'
        padding='1rem 0'
      >
        <SC.CounterPanel type='button' title='counter-panel'>
          <SC.CounterPanelValue>0</SC.CounterPanelValue>
          <div>{t('calendar.invite')}</div>
        </SC.CounterPanel>
        <SC.SynсhBtn type='button' title='synсh-btn'>
          {t('calendar.synchronization')}
        </SC.SynсhBtn>

        <SC.SharingContainer>
          <SC.CalendarSharingSwitcher>
            <SC.SwitcherCursor />
            <SC.SwitcherEnabled>{t('calendar.enable')}</SC.SwitcherEnabled>
          </SC.CalendarSharingSwitcher>
          <Divider orientation='vertical' variant='middle' flexItem />
          <SC.CalendarSharingBtn type='button' title='synсh-btn'>
            {t('calendar.freeSlots')}
          </SC.CalendarSharingBtn>
        </SC.SharingContainer>
      </Stack>
    </Stack>
  );
}
