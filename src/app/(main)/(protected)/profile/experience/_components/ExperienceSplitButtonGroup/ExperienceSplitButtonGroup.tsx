'use client';
import React, { FC, useState } from 'react';
import * as SC from './ExperienceSplitButtonGroup.style';
import { PropsButton } from './ExperienceSplitButtonGroup.type';

const ExperienceSplitButtonGroup: FC<PropsButton> = ({ nameButton, activeButton, onClickButton, watch }) => {
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
            disabled={
              item === activeButton &&
              (!watch('companyName') ||
                !watch('country') ||
                !watch('city') ||
                !watch('jobTitle') ||
                !watch('startMonth') ||
                !watch('startYear'))
            }
            disableRipple
            onClick={() => clickButtonHandler(item)}
            active={active === item}
          >
            <SC.ButtonName>{item}</SC.ButtonName>
          </SC.ButtonNavigation>
        );
      })}
    </SC.MenuButton>
  );
};

export default ExperienceSplitButtonGroup;
