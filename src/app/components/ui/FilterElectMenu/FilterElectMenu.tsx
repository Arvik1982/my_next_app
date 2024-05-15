import React, { useState } from 'react';
import * as SC from './FilterElectMenu.style';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/lib/storeHooks';
// import { changeFavorites } from '@/lib/store/filterSpecialistsSlice/specialistsSlice';

const FilterElectMenu = () => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();
  const buttonNames = [t('main.all'), t('main.favourites')];
  const [active, setActive] = useState(buttonNames[0]);
  const ICON_HEIGHT = 16;
  const ICON_WIDTH = 16;

  const onClickButton = (i: string) => {
    // dispatch(changeFavorites(i === t('main.favourites')));
    setActive(i);
  };

  return (
    <SC.MenuButton>
      {buttonNames.map((i) => {
        return (
          <SC.ButtonNavigation onClick={() => onClickButton(i)} fullWidth disableRipple key={i} active={active === i}>
            {i === 'Избранное' ? (
              <Image src={'/images/elect.svg'} width={ICON_WIDTH} height={ICON_HEIGHT} alt={''} />
            ) : null}
            <SC.ButtonName>{i}</SC.ButtonName>
          </SC.ButtonNavigation>
        );
      })}
    </SC.MenuButton>
  );
};

export default FilterElectMenu;
