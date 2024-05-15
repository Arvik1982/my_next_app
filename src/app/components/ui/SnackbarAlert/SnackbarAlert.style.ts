import styled from '@emotion/styled';
import { Snackbar } from '@mui/material';

export const SnackbarContent = styled.div`
  position: absolute;
  top: -0.3rem;
  right: 3.2rem;
  display: flex;
  align-items: center;
  margin: 0;
  border-radius: 1rem;
  box-shadow:
    0rem 0.5rem 1.75rem 0rem rgba(0, 0, 0, 0.3),
    0rem 0rem 0.13rem 0rem rgba(0, 0, 0, 0.1);
  background: rgb(255, 255, 255);
  color: rgb(38, 38, 51);
  font-family: Inter;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0rem;
  text-align: left;
  position: relative;
  width: 17.5rem;
  padding: 0.75rem;
  gap: 0.5rem;
`;

export const SnackbarWrapper = styled(Snackbar)``;
