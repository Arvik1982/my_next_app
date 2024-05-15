import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const StyledTextField = styled(TextField)`
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    color: #262633;
    font-variant-numeric: lining-nums proportional-nums;
    padding: 12px 16px;
    border-radius: 16px;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  fieldset {
    border-radius: 16px;
    border-color: #b4b8cc5c;
  }

  & > .MuiInputAdornment-positionStart {
    margin-right: 0;
    display: none;
  }

  &::placeholder {
    color: #85889e;
  }

  & > .MuiInputBase-multiline {
    padding: 12px 16px;
  }
`;

export const HelperText = styled.span`
  color: #85889e;
  font-family: Inter, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
  padding-bottom: 0.5rem;
`;
