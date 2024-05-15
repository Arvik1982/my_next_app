import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const AbsoluteContainer = styled.div`
  display: flex;
  margin-left: -1.5rem;
  padding: 0.625rem 1.5rem;
  position: absolute;
  bottom: -5.5rem;
  left: 0;
  width: calc(100% - 1.5rem);
  box-shadow: 0px 4px 12px 0px rgba(43, 44, 52, 0.16);
  background: rgb(247, 248, 250);
`;

export const BtnContainer = styled.div`
  display: flex;
  width: calc(100% - 23.5rem);
  min-width: 20.85rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.375rem;
  align-self: stretch;
  border-radius: 1.5rem;
  background: rgb(255, 255, 255);
`;

export const ButtonSubmit = styled(Button)`
  border-radius: 20px;
  width: calc(50% - 0.5rem);
  background-color: #53f;
  text-align: center;
  line-height: 20px;
  padding: 18px 24px;
  border: none;

  &:hover {
    background-color: #53f;
  }

  span {
    font-family: Inter, sans-serif;
    color: rgb(255, 255, 255);
    letter-spacing: 0px;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-transform: lowercase;
    &:first-letter {
      text-transform: uppercase;
    }
  }
`;

export const ButtonClear = styled(Button)`
  border-radius: 20px;
  width: calc(50% - 0.5rem);
  background-color: white;
  text-align: center;
  line-height: 20px;
  padding: 18px 24px;
  margin-left: 0.5rem;

  &:hover {
    background-color: white;
  }

  span {
    font-family: Inter, sans-serif;
    color: rgb(38, 38, 51);
    letter-spacing: 0px;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-transform: lowercase;
    &:first-letter {
      text-transform: uppercase;
    }
  }
`;
