import styled from '@emotion/styled';

export const DropdownsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DropdownWithLabel = styled.div`
  grid-row: 2;
`;

export const Label = styled.span`
  color: rgb(133, 136, 158);
  font-family: Inter;
  font-size: 0.9rem;
  line-height: 1.25rem;
`;

export const DeleteImage = styled.div`
  grid-row: 2;
`;

export const ButtonBlock = styled.button`
  height: 2.75rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.63rem 1.25rem 0.63rem 1rem;
  flex: none;
  order: 0;
  flex-grow: 0;
  border-radius: 1rem;
  border: none;
  margin-bottom: 20px;
  background: rgba(180, 184, 204, 0.26);
`;

export const Button = styled.span`
  color: rgb(38, 38, 51);
  font-family: Inter;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: center;
`;
