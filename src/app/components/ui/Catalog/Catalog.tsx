'use client';
import { FC } from 'react';
import * as SC from './Catalog.style';
import { Props } from '@/app/components/ui/Catalog/Catalog.type';

const Catalog: FC<Props> = ({ children }) => {
  return <SC.Container>{children}</SC.Container>;
};

export default Catalog;
