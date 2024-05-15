'use client';

import { ReactNode } from 'react';

import * as SC from './Sidebar.style';

interface Props {
  children: ReactNode;
}

const SidebarContainer = ({ children }: Props) => {
  return <SC.Container>{children}</SC.Container>;
};

export default SidebarContainer;
