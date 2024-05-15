import styled from '@emotion/styled';
import { Box, Modal } from '@mui/material';
import Image from 'next/image';
import { slideIn } from './SlidingModalWindowAnimations.style';

export const BoxContainer = styled(Box)`
  overflow: auto;
  position: relative;
  width: 68%;
  border-radius: 0 24px 24px 24px;
  background: #f7f8fa;
  padding: 0 0 0 24px;
  animation: slideIn 0.2s ease-out;
  ${slideIn}
`;

export const ExitIcon = styled(Image)`
  margin: 24px 56px;
  padding: 10px;
  border-radius: 16px;
  background-color: #fff;
  width: 24px;
  height: 24px;
  cursor: pointer;
  z-index: 1;
  animation: slideIn 0.2s ease-out;
`;

export const ModalContainer = styled(Modal)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: auto;
`;
