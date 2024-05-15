import styled from '@emotion/styled';
import Image from 'next/image';
import Box from '@mui/material/Box';

export const CloseIcon = styled(Image)`
  position: absolute;
  top: 41px;
  right: 20px;
  cursor: pointer;
`;
export const BoxContainer = styled(Box)`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #fff;
  border-radius: 20px;
  padding: 39px 58px 46px;
  :focus-visible {
    outline: none;
  }
`;
