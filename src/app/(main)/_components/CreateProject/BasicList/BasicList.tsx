import * as React from 'react';
import { FC, useRef } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import * as SC from './BasicList.style';
import useOutClick from '@/hooks/useOutClick';

const BasicList: FC<{ clickCreate: () => void; closeBasicList: () => void }> = ({ clickCreate, closeBasicList }) => {
  const ICON_SIZE = 20;
  const myRef = useRef<HTMLDivElement>(null);
  useOutClick(myRef, closeBasicList);

  return (
    <SC.BoxContainer ref={myRef}>
      <List>
        <ListItem disablePadding onClick={clickCreate}>
          <SC.ListItemBTN disableRipple>
            <SC.Icon src={'/images/folder.svg'} alt={'folder'} width={ICON_SIZE} height={ICON_SIZE} />
            <SC.ListText primary='Проект' />
          </SC.ListItemBTN>
        </ListItem>
        <ListItem disablePadding disabled>
          <SC.ListItemBTN disableRipple>
            <SC.Icon src={'/images/edit-pencil.svg'} alt={'edit-pencil'} width={ICON_SIZE} height={ICON_SIZE} />
            <SC.ListText primary='Статью' />
          </SC.ListItemBTN>
        </ListItem>
        <ListItem disablePadding disabled>
          <SC.ListItemBTN disableRipple>
            <SC.Icon src={'/images/calendar.svg'} alt={'calendar'} width={ICON_SIZE} height={ICON_SIZE} />
            <SC.ListText primary='Мероприятие' />
          </SC.ListItemBTN>
        </ListItem>
      </List>
    </SC.BoxContainer>
  );
};
export default BasicList;
