import styled from '@emotion/styled';
import { Modal } from '@mui/material';

export const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background: rgba(38, 38, 51, 0.6);
  outline: none;
`;
export const Container = styled.div`
  display: flex;
  position: absolute;
  width: 32rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 1.5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 1.5rem;
  gap: 1.5rem;
  outline: none;
`;

export const NewCompanyTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.75rem;
  margin: 0;
  letter-spacing: 0;
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const ExitButton = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  padding: 0;
  border: none;
  background-color: transparent;
  margin: 0;
`;

export const DatesInputContainer = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 0.5rem) calc(50% - 0.5rem);
  gap: 1rem;
`;
