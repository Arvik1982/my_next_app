import styled from '@emotion/styled';
import Image from 'next/image';
import { Box } from '@mui/material';

export const iconWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
`;
export const BoxIcon = styled(Box)`
  width: 22rem;
  display: flex;
  padding: 24px;
  gap: 24px;
  flex-direction: column;
  border-radius: 24px;
  background-color: #fff;
  outline: none;
`;
export const Icon = styled(Image)`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
`;
