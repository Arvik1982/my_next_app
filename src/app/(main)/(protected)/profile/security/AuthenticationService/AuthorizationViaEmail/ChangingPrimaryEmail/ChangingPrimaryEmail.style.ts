import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const FormContainer = styled.form`
  border-radius: 1.5rem;
  background: rgb(255, 255, 255);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 22rem;
  width: 100%;
`;
export const VectorWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
export const CustomTextField = styled(TextField)`
  width: 100%;
  border: none;
  margin-bottom: 0.75rem;

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
    border: 0.06rem solid rgba(180, 184, 204, 0.36);
    border-radius: 16px;
  }
`;
export const TextRecommendation = styled.p`
  color: rgb(133, 136, 158);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
  margin: 0;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8125rem;
`;
export const InputLabel = styled.span`
  color: rgb(133, 136, 158);
  font-family: Inter, sans-serif;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
`;
