import styled from '@emotion/styled';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Err } from './InputPassword.type';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const CustomOutlinedInput = styled(OutlinedInput)<Err>`
  width: 100%;
  border: ${(props) => (props.error ? '0.06rem solid rgb(255, 51, 51);' : '1px solid rgba(180, 184, 204, 0.36)')};
  border-radius: 1rem;

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
export const Label = styled.span`
  color: rgb(133, 136, 158);
  font-family: Inter, sans-serif;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
`;
export const ErrorText = styled.div`
  color: rgb(255, 51, 51);
  font-family: Inter, sans-serif;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
`;
