import styled from '@emotion/styled';
import { Modal } from '@mui/material';

export const ModalContainer = styled(Modal)`
  position: fixed;
  z-index: 1300;
  background-color: rgb(0, 0, 0, 0.5);
  outline: none;
`;

export const Container = styled.div`
  position: absolute;
  height: 22rem;
  right: 1.5rem;
  top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  padding-bottom: 0;
  border-radius: 1rem;
  box-shadow: 0rem 0.25rem 0.75rem 0rem rgba(43, 44, 52, 0.16);
  background: rgb(255, 255, 255);
`;

export const PersonalData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0rem;
  flex: none;
  cursor: pointer;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  gap: 1rem;
`;

export const AvatarBlock = styled.div`
  width: 3rem;
  height: 3rem;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.13rem 0rem 0.13rem 0rem;
  flex: none;
  order: 1;
  flex-grow: 1;
  gap: 0.13rem;
`;

export const Username = styled.div`
  color: rgb(38, 38, 51);
  font-family: Inter;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0rem;
  text-align: left;
`;

export const Email = styled.div`
  color: rgb(133, 136, 158);
  font-family: Inter;
  font-size: 0.81rem;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: 0rem;
  text-align: left;
`;

export const ItemTab = styled.button`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 1.3rem;
  order: 0;
  flex-grow: 0.8;
  color: rgb(38, 38, 51);
  font-family: Inter;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0rem;
  text-align: left;
  gap: 12px;
  cursor: pointer;
  background-color: inherit;
  border: none;
  padding: 0;
  width: 100%;
`;

export const ItemName = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 105%;
  order: 0;
  flex-grow: 1;
  color: rgb(38, 38, 51);
  font-family: Inter;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0rem;
  text-align: left;
`;
