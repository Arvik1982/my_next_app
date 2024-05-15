import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const ButtonSubmit = styled(Button)`
  border-radius: 20px;
  width: 100%;
  background-color: #53f;
  color: #fff;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  padding: 18px 24px;
  border: none;
  &:hover {
    background-color: #53f;
  }
`;
export const ButtonText = styled.span`
  color: rgb(255, 255, 255);
  font-family: Inter;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0rem;
  text-align: center;
  text-transform: lowercase;
  :first-letter {
    text-transform: uppercase;
  }
`;
export const FormElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  span {
    color: #85889e;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: Inter, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`;
export const Or = styled.span`
  color: #85889e;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0;
  width: 100%;
`;
export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0;
`;

export const Error = styled.div`
  color: rgb(255, 51, 51);
  font-family: Inter;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0rem;
  text-align: left;
`;
