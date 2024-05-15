import { useTranslation } from 'react-i18next';
import * as SC from './ExpertMarkWithPopup.style';
import Image from 'next/image';
import PopupExpert from '../PopupExpert/PopupExpert';
import { FC, MouseEvent, useState } from 'react';
import ExpertMarkWithPopupProps from './ExpertMarkWithPopup.type';

export const ExpertMarkWithPopup: FC<ExpertMarkWithPopupProps> = ({ specialist }) => {
  const [open, setPopupOpen] = useState(false);
  const { t } = useTranslation();
  const ICON_SIZE = 12;

  const closePopup = (e: MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    setPopupOpen(false);
  };

  return (
    <SC.Expert onClick={() => setPopupOpen(true)}>
      <Image src={'/images/check.svg'} alt={'check'} width={ICON_SIZE} height={ICON_SIZE} />
      <SC.TextButton>{t('specialists.expert')}</SC.TextButton>
      <PopupExpert specialist={specialist} closePopup={closePopup} openPopup={open} />
    </SC.Expert>
  );
};
