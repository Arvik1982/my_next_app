import * as SC from './TabButtons.style';
import React, { FC, useState } from 'react';
import { PropsButton } from '@/app/components/ui/TabButtons/TabButtons.type';

const TabButtons: FC<PropsButton> = ({ nameButton, activeButton, onClickButton, isDisabled }) => {
  const [active, setActive] = useState(activeButton);

  const clickButtonHandler = (i: string) => {
    onClickButton(i);
    setActive(i);
  };

  return (
    <SC.MenuButton>
      {nameButton.map((item) => {
        return (
          <SC.ButtonNavigation
            key={item}
            disableRipple
            onClick={() => clickButtonHandler(item)}
            active={active === item}
            disabled={isDisabled}
          >
            <SC.ButtonName>{item}</SC.ButtonName>
          </SC.ButtonNavigation>
        );
      })}
    </SC.MenuButton>
  );
};

export default TabButtons;
