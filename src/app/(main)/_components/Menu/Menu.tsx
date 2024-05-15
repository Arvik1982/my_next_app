'use client';
import { List } from '@mui/material';
import * as SC from './Menu.style';
import { usePathname } from 'next/navigation';
import { routs } from '@/lib/routes';
import { MenuItem } from './Menu.type';
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const { t } = useTranslation();
  const menuItems: MenuItem[] = [
    // { name: 'Актуальное', text: t('main.relevant'), Icon: '/images/house.svg' },
    { name: 'Специалисты', text: t('main.specialists'), Icon: '/images/users.svg' },
    { name: 'Компании', text: t('main.company'), Icon: '/images/company.svg' },
    { name: 'Мероприятия', text: t('main.events'), Icon: '/images/calendar.svg', disabled: true },
    { name: 'Проекты', text: t('main.projects'), Icon: '/images/folder.svg', disabled: true },
    // { name: 'Статьи', text: t('main.articles'), Icon: '/images/edit-pencil.svg' },
  ];

  const currentPath = usePathname();
  const ICON_Size = 24;

  return (
    <SC.Container>
      <List>
        {menuItems.map((item) => (
          <SC.LinkRoute href={`/${routs[item.name]}`} disabled={!!item.disabled} key={item.name}>
            <SC.MenuItem
              disabled={!!item.disabled}
              disablePadding
              isSpecialists={`/${routs[item.name]}` === currentPath}
            >
              <SC.ItemIcon width={ICON_Size} height={ICON_Size} src={item.Icon} alt={'icon'} />
              <SC.ItemText primary={item.text} />
            </SC.MenuItem>
          </SC.LinkRoute>
        ))}
      </List>
    </SC.Container>
  );
};

export default Menu;
