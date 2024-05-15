import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: rgb(255, 255, 255);
  padding: 1.5rem;
  border-radius: 1.5rem;
  max-width: 22rem;
  width: 100%;
`;

export const RecomendationBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const TextRecommendations = styled.p`
  margin: 0;
  width: 20rem;
  color: rgb(133, 136, 158);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
`;

export const InputBlock = styled.div`
  margin-bottom: 0.75rem;
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8125rem;
`;

export const ForgotPassword = styled.span`
  margin: 0;
  color: rgb(38, 38, 51);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: center;
  text-transform: lowercase;
  &:first-letter {
    text-transform: uppercase;
  }
`;
export const CheckboxContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  span {
    padding: 0;
  }
  p {
    margin: 0;
  }
`;
export const Error = styled.span`
  color: rgb(255, 51, 51);
  font-family: Inter, sans-serif;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
`;
