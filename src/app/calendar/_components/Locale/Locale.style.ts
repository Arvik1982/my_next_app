import styled from '@emotion/styled';

export const CalendarLangBox = styled.div`
  position: relative;
  width: 100px;
  min-height: 39px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2px;
  z-index: 99;
`;

export const CalendarBtn = styled.button`
  position: absolute;
  top: 0;
  height: 39px;
  width: 100px;
  border: 1px solid rgba(255, 255, 255, 0.44);
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.14);
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.5s ease-out;
`;
