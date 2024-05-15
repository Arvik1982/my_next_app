import styled from '@emotion/styled';
import { Box, TextField } from '@mui/material';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: #ffffff;
  width: 100%;
  max-width: 22rem;
  border-radius: 1.5rem;
`;
export const Recommendation = styled.p`
  margin: 0;
  color: rgb(133, 136, 158);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
`;
export const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.8125rem;
`;
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
    height: 3rem;
  }
`;
export const InputEmailContainer = styled(Box)`
  height: 2.8rem;
  border-radius: 16px;
  border: 1px solid rgba(180, 184, 204, 0.36);
`;
