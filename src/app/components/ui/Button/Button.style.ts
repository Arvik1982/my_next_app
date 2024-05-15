import styled from '@emotion/styled';
import { Button as MUIButton } from '@mui/material';

export const StyledButton = styled(MUIButton)`
  border-radius: 1rem;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-transform: none;
  line-height: 1.25rem;
  letter-spacing: 0;
  background: rgb(85, 51, 255);
  padding: 0.625rem 1.25rem 0.625rem 1rem;
  color: #fff;
  &:hover {
    background: rgb(43, 0, 255);
  }
  &:active {
    background: rgb(48, 20, 184);
  }
  & > span {
    margin-left: 0;
  }
`;
