'use client';

import { FC, PropsWithChildren } from 'react';
import * as SC from './PageWithCompleteness.style';
import ProfileCompleteness from '../ProfileCompleteness/ProfileCompleteness';

const PageWithCompleteness: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SC.Container>
      {children}
      <ProfileCompleteness
        mainPercentage={0}
        contactsPercentage={0}
        experiencePercentage={0}
        educationPercentage={0}
        mentorshipPercentage={0}
      />
    </SC.Container>
  );
};

export default PageWithCompleteness;
