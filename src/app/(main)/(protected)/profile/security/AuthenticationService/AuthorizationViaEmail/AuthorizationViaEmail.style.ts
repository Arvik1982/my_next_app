import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.25rem;
`;
export const ButtonText = styled.span`
  color: rgb(38, 38, 51);
  font-family: Inter, sans-serif;
  font-size: 0.88rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: center;
  text-transform: lowercase;
  :first-letter {
    text-transform: uppercase;
  }
`;
export const ButtonEmail = styled(Button)`
  border-radius: 0.75rem;
  background: rgba(180, 184, 204, 0.26);
  box-shadow: none;
  padding: 0.5rem 1rem;
  &:hover {
    background: rgba(180, 184, 204, 0.26);
    box-shadow: none;
  }
`;

export const ConfirmNotice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.19rem 0.38rem 0.19rem 0.38rem;
  border-radius: 0.38rem;
  background: rgba(180, 184, 204, 0.12);
  box-shadow: none;
  color: rgb(38, 38, 51);
  font-family: Inter;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 0.88rem;
  letter-spacing: 0rem;
  text-align: left;
`;
