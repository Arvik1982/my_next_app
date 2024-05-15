'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import * as SC from './SidebarItem.style';
import { useAppDispatch } from '@/lib/storeHooks';
import { setOpen, setPage } from '@/lib/store/profileEditSlice/profileEditSlice';

export interface SidebarItemProps {
  title?: string;
  subtitle: string;
  children?: ReactNode;
  pageName: string;
  plusIconColor?: string;
}

const SidebarItem = ({ title, subtitle, pageName, children, plusIconColor }: SidebarItemProps) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setPage(pageName));
    dispatch(setOpen(true));
  };

  return (
    <SC.Container>
      <SC.Header>
        <SC.Title>{title}</SC.Title>
        {children && <Image src='/images/arrow-right.svg' alt='arrow-right' width={16} height={16} />}
      </SC.Header>

      {children ? (
        <SC.Children>{children}</SC.Children>
      ) : (
        <SC.Wrapper onClick={handleClick}>
          <SC.ImageWrapper>
            <SC.PlusIconStyled color={plusIconColor} />
          </SC.ImageWrapper>
          <SC.Subtitle>{subtitle}</SC.Subtitle>
        </SC.Wrapper>
      )}
    </SC.Container>
  );
};

export default SidebarItem;
