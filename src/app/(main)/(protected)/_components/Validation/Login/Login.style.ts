import styled from '@emotion/styled';

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

export const ButtonBlock = styled.div`
  button {
    padding: 1.13rem 1.5rem 1.13rem 1.5rem;
  }
`;

export const WhiteButton = styled.div`
  margin-top: 0.5rem;
  button {
    padding: 1.13rem 1.5rem 1.13rem 1.5rem;
    background-color: inherit;
    &:hover {
      background-color: inherit;
    }
  }
`;
