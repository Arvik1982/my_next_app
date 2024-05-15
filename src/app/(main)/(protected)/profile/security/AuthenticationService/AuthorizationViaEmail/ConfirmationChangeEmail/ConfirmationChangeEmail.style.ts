import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const BoxContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: fit-content;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 1.5rem;
  width: 25rem;
`;
export const Text = styled.p`
  margin: 0;
  color: rgb(133, 136, 158);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
`;

export const Email = styled.span`
  text-decoration: none;
  color: rgb(38, 38, 51);
`;
