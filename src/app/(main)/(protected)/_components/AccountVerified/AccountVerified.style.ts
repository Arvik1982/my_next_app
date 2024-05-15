import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 1.5rem;
  padding: 1.5rem;
  background-color: #ffffff;
  width: 22rem;
`;

export const RegistrationSuccess = styled.h2`
  color: #262633;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Manrope, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  margin: 0;
`;

export const Compliments = styled.p`
  margin: 0;
  color: #85889e;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const ButtonBlock = styled.div`
  button {
    padding: 1.13rem 1.5rem 1.13rem 1.5rem;
  }
`;

export const ButtonText = styled.span`
  text-transform: lowercase;
  :first-letter {
    text-transform: uppercase;
  }
`;
