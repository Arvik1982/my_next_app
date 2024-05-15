'use client';

import { FC } from 'react';
import * as SC from './MainTab.style';
import PersonalData from '../PersonalData/PersonalData';

const MainTab: FC = () => {
  return (
    <SC.Container>
      <PersonalData />
    </SC.Container>
  );
};

export default MainTab;
