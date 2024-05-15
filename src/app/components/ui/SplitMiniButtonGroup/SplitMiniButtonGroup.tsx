'use client';
import React, { FC, useState } from 'react';
import * as SC from './SplitMiniButtonGroup.style';
import { PropsButton } from './SplitMiniButtonGroup.type';

const SplitMiniButtonGroup: FC<PropsButton> = ({ nameButton, activeButton, onClickButton }) => {
  const [active, setActive] = useState(activeButton);
  const clickButtonHandler = (i: string) => {
    onClickButton(i);
    setActive(i);
  };
  return (
    <SC.MenuButton>
      {nameButton.map((item, index) => {
        return (
          <SC.ButtonNavigation
            key={index}
            disableRipple
            onClick={() => clickButtonHandler(item)}
            active={active === item}
          >
            <SC.ButtonName active={active === item}>{item}</SC.ButtonName>
          </SC.ButtonNavigation>
        );
      })}
    </SC.MenuButton>
  );
};

export default SplitMiniButtonGroup;
