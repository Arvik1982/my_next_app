import styled from '@emotion/styled';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { OutlinedInputContainerProps } from './TextFieldPrice.type';

export const OutlinedInputContainer = styled(OutlinedInput)<OutlinedInputContainerProps>`
  box-sizing: border-box;
  border: 0.06rem solid ${(props) => (props.active ? 'rgb(42, 22, 202)' : 'rgba(180, 184, 204, 0.36)')};
  border-radius: 1rem;
  box-shadow: none;
  outline: none;
  input {
    font-variant-numeric: lining-nums proportional-nums;
    padding: 0.75rem 0;
    border-radius: 16px;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 400;
    border: none;
    &[type='number']::-webkit-inner-spin-button,
    &[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    color: rgb(38, 38, 51);
    font-size: 1rem;
    line-height: 1.25rem;
    text-align: left;
  }

  fieldset {
    border: none;
    border-radius: 16px;

    &:focus {
      border: 0.06rem solid rgb(220, 184, 234);
    }
  }

  &:hover {
    &.MuiOutlinedInput-root {
      & fieldset {
        border-color: transparent;
      }
    }
  }
`;
export const Adornment = styled(InputAdornment)`
  p {
    color: rgb(133, 136, 158);
    font-family: Inter, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0;
    text-align: left;
  }
`;
