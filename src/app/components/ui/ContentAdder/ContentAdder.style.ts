import styled from '@emotion/styled';
import PlusIcon from '../../../../../public/images/plus.svg';

export const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Title = styled.h3`
  margin: 0;
  color: rgb(38, 38, 51);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0;
`;

export const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.625rem 1.25rem 0.625rem 1rem;
  gap: 0.5rem;
  cursor: pointer;
  border-radius: 16px;
  background-color: #b4b8cc42;
`;

export const PlusIconStyled = styled(PlusIcon)`
  width: 24px;
  height: 24px;
  path {
    stroke: black;
  }
`;
