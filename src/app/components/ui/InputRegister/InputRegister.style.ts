import styled from '@emotion/styled';
import { Box, TextField } from '@mui/material';
import { Err } from './InputRegister.type';

export const CustomTextField = styled(TextField)`
  width: 100%;
  border: none;

  div {
    border-radius: 16px;
    height: 48px;
    margin-top: 1px;
  }

  input {
    color: #262633;
    font-variant-numeric: lining-nums proportional-nums;
    padding: 12px 16px;
    border-radius: 16px;
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    border: none;
  }

  fieldset {
    border: none;
    border-radius: 16px;
  }
`;
export const BoxContainer = styled(Box)<Err>`
  position: relative;
  border-radius: 16px;
  border: ${(props) => (props.err ? '0.06rem solid rgb(255, 51, 51);' : '1px solid rgba(180, 184, 204, 0.36)')};
`;

export const ImageBlock = styled.div`
  position: absolute;
  top: 0.9375rem;
  right: 0.9375rem;
`;
