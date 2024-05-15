import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const ConnectionButton = styled(Button)`
  border-radius: 16px;
  padding: 1.13rem 1.5rem 1.13rem 1.5rem;
  background: #53f;
  box-shadow: none;
  color: #fff;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-transform: lowercase;

  &:hover {
    background-color: #53f;
    box-shadow: none;
  }
`;
export const TextWrapper = styled.span`
  white-space: nowrap;

  :first-letter {
    text-transform: uppercase;
  }
`;
