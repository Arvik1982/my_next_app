import Image from 'next/image';
import * as SC from './ExperiencePopup.style';
import { FC } from 'react';
import { ExperiencePopupProps } from './ExperiencePopup.type';

export const ExperiencePopup: FC<ExperiencePopupProps> = ({ open, setOpen }) => {
  const ICON_SIZE = 24;

  return (
    <SC.PopupDiv open={open}>
      <SC.PopupButton onClick={() => {}}>
        <Image src='/images/black-edit-pencil.svg' alt='editIcon' width={ICON_SIZE} height={ICON_SIZE} />
        Редактировать
      </SC.PopupButton>
      <SC.PopupButton onClick={() => {}}>
        <Image src='/images/basket-black.svg' alt='deleteIcon' width={ICON_SIZE} height={ICON_SIZE} />
        Удалить
      </SC.PopupButton>
    </SC.PopupDiv>
  );
};
