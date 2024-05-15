import styled from '@emotion/styled';

export const FormElement = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 10px;
  color: rgb(38, 38, 51);
`;

export const TitleInput = styled.div`
  color: rgb(133, 136, 158);
  font-family: Inter;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
`;

export const BasketButton = styled.button`
  position: absolute;
  top: 35px;
  width: 30px;
  height: 30px;
  background-color: inherit;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
