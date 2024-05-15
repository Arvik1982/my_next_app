import styled from '@emotion/styled';
import { Box, ListItemText } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import Image from 'next/image';

export const BoxContainer = styled(Box)`
  width: 100%;
  max-width: 10.25rem;
  position: absolute;
  border-radius: 1rem;
  box-shadow: 0 0.25rem 0.75rem 0 rgba(43, 44, 52, 0.16);
  background: rgb(255, 255, 255);
  z-index: 99999;
`;
export const ListItemBTN = styled(ListItemButton)`
  display: flex;
  gap: 0.5rem;
`;
export const ListText = styled(ListItemText)`
  color: rgb(38, 38, 51);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
`;
export const Icon = styled(Image)`
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%);
`;
