import styled from '@emotion/styled';
import Checkbox from '@mui/material/Checkbox';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 22rem;
  padding: 1.5rem;
  border-radius: 1.5rem;
  background: rgb(255, 255, 255);
`;
export const RecomendationBlock = styled.div`
  display: flex;
  margin-bottom: 0.813rem;
  align-items: center;
`;
export const Recomendation = styled.p`
  width: 19rem;
  color: rgb(133, 136, 158);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
  margin: 0;
`;
export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;
export const Check = styled(Checkbox)`
  padding: 0;
`;
export const CheckboxText = styled.span`
  color: rgb(38, 38, 51);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
  width: 19rem;
`;
export const ForgotPassword = styled.p`
  text-align: center;
  text-decoration: none;
  color: rgb(38, 38, 51);
  margin: 0;
`;
