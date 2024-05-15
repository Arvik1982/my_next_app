import styled from '@emotion/styled';
import { Button as MUIButton } from '@mui/material';

export const StyledButton = styled(MUIButton)`
  border-radius: 1rem;
  background: #ffffff;
  padding: 10px 20px 10px 16px;
  color: rgb(38, 38, 51);

  &:hover {
    background: rgba(180, 184, 204, 0.18);
  }
  &:active {
    background: rgba(180, 184, 204, 0.26);
  }
`;
export const ButtonText = styled.span`
  color: rgb(38, 38, 51);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: center;

  &:first-letter {
    text-transform: uppercase;
  }
`;
