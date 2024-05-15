import styled from '@emotion/styled';
import { PopupButtonProps } from './ExperiencePopup.type';

export const PopupDiv = styled.div<PopupButtonProps>`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  position: absolute;
  top: 2.375rem;
  right: -7.5rem;
  z-index: 1300;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1rem 1.25rem 1rem 1rem;
  border-radius: 1rem;
  background-color: #fff;
  align-items: start;
  box-shadow:
    0 0.5rem 1.75rem 0 rgba(0, 0, 0, 0.3),
    0 0 0.125rem 0 rgba(0, 0, 0, 0.1);
`;

export const PopupButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  color: rgb(38, 38, 51);
  gap: 0.5rem;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  padding: 0;
  background-color: transparent;
`;
