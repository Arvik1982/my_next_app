import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Image from 'next/image';
import Modal from '@mui/material/Modal';

export const Container = styled(Modal)`
  top: 0;
`;
export const BoxContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: fixed;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 32rem;
  width: 100%;
  height: fit-content;
  outline: none;
  padding: 1.5rem;
  border-radius: 1.5rem;
  background: rgb(255, 255, 255);
`;
export const Exit = styled(Image)`
  cursor: pointer;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;
