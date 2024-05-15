'use client';
import React, { FC } from 'react';
import * as SC from './ContentSlidingModalWindow.style';
import { Props } from './ContentSlidingModalWindow.type';

const ContentSlidingModalWindow: FC<Props> = ({ projects }) => {
  return (
    <SC.Container>
      {projects.map((i) => {
        return <SC.Project key={i.id} src={i.src} alt={'project'} width={100} height={100} />;
      })}
    </SC.Container>
  );
};

export default ContentSlidingModalWindow;
