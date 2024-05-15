import { ListItemButton } from '@mui/material';
import * as SC from './ReadyToWorkMark.style';
import useOutClick from '@/hooks/useOutClick';
import { FC, useRef, useState } from 'react';
import { ReadyToWorkMarkProps } from './ReadyToWorkMark.type';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const ReadyToWorkMark: FC<ReadyToWorkMarkProps> = ({ work_status }) => {
  const [openWorkPopup, setOpenWorkPopup] = useState(false);
  const [workStatus, setWorkStatus] = useState(1);
  const { t } = useTranslation();
  const ICON_SIZE = 24;

  const closePopup = () => {
    setOpenWorkPopup(false);
  };

  const myRef = useRef<HTMLDivElement>(null);
  useOutClick(myRef, closePopup);

  const handleOnClick = (n: number) => {
    setWorkStatus(n);
    closePopup();
  };

  const switchPopupOpen = () => {
    setOpenWorkPopup(!openWorkPopup);
  };

  return (
    <SC.MarkContainer>
      <SC.Ready onClick={switchPopupOpen} status={workStatus}>
        {workStatus === 1
          ? t('specialists.readyWork')
          : workStatus === 2
            ? t('specialists.notReadyWork')
            : t('specialists.notChoosedWork')}
      </SC.Ready>
      {openWorkPopup && (
        <SC.BoxContainer ref={myRef}>
          <SC.StyledList>
            <SC.StyledListItem disablePadding onClick={() => handleOnClick(1)}>
              <ListItemButton disableRipple>
                {workStatus === 1 ? (
                  <Image src={'/images/check-2.svg'} alt='check' width={ICON_SIZE} height={ICON_SIZE} />
                ) : (
                  <SC.BlankImage />
                )}
                <SC.ListText primary='Ищу работу' />
              </ListItemButton>
            </SC.StyledListItem>
            <SC.StyledListItem disablePadding onClick={() => handleOnClick(2)}>
              <ListItemButton disableRipple>
                {workStatus === 2 ? (
                  <Image src={'/images/check-2.svg'} alt='check' width={ICON_SIZE} height={ICON_SIZE} />
                ) : (
                  <SC.BlankImage />
                )}
                <SC.ListText primary='Не ищу работу' />
              </ListItemButton>
            </SC.StyledListItem>
            <SC.StyledListItem disablePadding onClick={() => handleOnClick(0)}>
              <ListItemButton disableRipple>
                {!workStatus ? (
                  <Image src={'/images/check-2.svg'} alt='check' width={ICON_SIZE} height={ICON_SIZE} />
                ) : (
                  <SC.BlankImage />
                )}
                <SC.ListText primary='Не выбрано' />
              </ListItemButton>
            </SC.StyledListItem>
          </SC.StyledList>
        </SC.BoxContainer>
      )}
    </SC.MarkContainer>
  );
};
