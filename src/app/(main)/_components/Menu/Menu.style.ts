import styled from '@emotion/styled';
import { Box, ListItem, ListItemText } from '@mui/material';
import Image from 'next/image';
import { ItemIconProps } from '@/app/(main)/_components/Menu/Menu.type';
import Link from 'next/link';

export const Container = styled(Box)`
  width: 216px;
  margin-left: 24px;
`;

export const MenuItem = styled(ListItem)<ItemIconProps>`
  cursor: pointer;
  height: 44px;
  gap: 8px;
  padding: 10px 14px 10px 10px;
  border-radius: 12px;
  background-color: ${({ isSpecialists }) => isSpecialists && '#fff'};
  img {
    ${({ isSpecialists }) =>
      isSpecialists &&
      ` filter: brightness(33%) saturate(100%) invert(69%) sepia(100%) saturate(10000%) hue-rotate(220deg)
        hue-rotate(18deg)`}
  }
  &:hover {
    background-color: #fff;
    img {
      filter: brightness(33%) saturate(100%) invert(69%) sepia(100%) saturate(10000%) hue-rotate(220deg)
        hue-rotate(18deg);
    }
  }
`;
export const LinkRoute = styled(Link)<{ disabled: boolean }>`
  text-decoration: none;
  ${(props) => props.disabled && 'pointer-events: none;'}
`;
export const ItemIcon = styled(Image)`
  min-width: 0;
  margin-right: 8px;
`;

export const ItemText = styled(ListItemText)`
  color: #262633;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
