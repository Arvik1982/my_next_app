import styled from '@emotion/styled';
import { OutlinedInput } from '@mui/material';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  margin: 0;
  margin-right: 1.25rem;
`;

export const Underline = styled.span`
  text-decoration: underline;
  text-underline-offset: 0.125rem;
`;

export const Search = styled(OutlinedInput)`
  padding: 0.75rem 1rem;
  height: 3rem;
  border-radius: 1rem;
  border: 1px solid rgba(180, 184, 204, 0.36);
  font-family: Inter, sans-serif;
  gap: 0.75rem;

  & > .MuiInputAdornment-positionStart {
    margin-right: 0;
  }

  & > fieldset {
    border: none;
  }

  &::placeholder {
    color: #85889e;
  }
`;
