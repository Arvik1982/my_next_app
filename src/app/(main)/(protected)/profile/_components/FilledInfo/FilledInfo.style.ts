import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const Wrapper = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background: rgb(255, 255, 255);
`;
export const ImageBlock = styled.div`
  height: 2.063rem;
  img {
    width: 100%;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  color: rgb(179, 184, 204);
  font-family: Inter;
  font-size: 0.81rem;
  font-weight: 400;
  line-height: 1.13rem;
  letter-spacing: 0rem;
  text-align: left;
`;
export const Button = styled.button`
  background-color: inherit;
  border: none;
  padding: 0;
`;
