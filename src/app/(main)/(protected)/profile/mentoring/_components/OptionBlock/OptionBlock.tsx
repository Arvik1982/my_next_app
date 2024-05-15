'use client';

import { FC, PropsWithChildren } from 'react';
import * as SC from './OptionBlock.style';
import { OptionBlockProps } from './OptionBlock.type';

const OptionBlock: FC<PropsWithChildren & OptionBlockProps> = ({ children, title, description }) => {
  return (
    <SC.Container>
      <SC.InfoContainer>
        <SC.Title>{title}</SC.Title>
        {description && <SC.Description>{description}</SC.Description>}
      </SC.InfoContainer>
      {children}
    </SC.Container>
  );
};

export default OptionBlock;
