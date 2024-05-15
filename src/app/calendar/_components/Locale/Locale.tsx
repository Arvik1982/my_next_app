import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import * as SC from './Locale.style';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const locales = ['Русский', 'English'];

function Locale() {
  const [opened, setOpened] = useState(false);
  const [locale, setLocale] = useState('Русский');

  const { t, i18n } = useTranslation();

  useEffect(() => {
    setOpened(false);
  }, []);

  const handleClick = (locale: string) => {
    setLocale(locale);
    locale == 'Русский' ? i18n.changeLanguage('ru') : i18n.changeLanguage('en');
    setOpened(false);
  };

  return (
    <SC.CalendarLangBox>
      <SC.CalendarBtn type='button' title='calendar-lang' onClick={() => setOpened(!opened)}>
        {locale}
      </SC.CalendarBtn>
      {opened && (
        <List
          component='ul'
          dense={true}
          disablePadding
          sx={{ position: 'absolute', top: 42, bgcolor: 'background.paper' }}
        >
          {locales.map((item) => {
            return (
              <ListItem key={item} sx={{ padding: 0 }}>
                <ListItemButton title='calendar-lang__item' onClick={() => handleClick(item)}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      )}
    </SC.CalendarLangBox>
  );
}

export default Locale;
