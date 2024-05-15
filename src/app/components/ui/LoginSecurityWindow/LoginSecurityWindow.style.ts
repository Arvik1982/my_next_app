import styled from '@emotion/styled';
import Modal from '@mui/material/Modal';

export const ModalContainer = styled(Modal)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.5);
  outline: none;
`;
export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 0.5rem;
  outline: none;
`;
