import styled from '@emotion/styled';

export const Name = styled.div`
  display: flex;
  gap: 16px;
  align-self: stretch;
`;
export const FormName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
  span {
    color: #85889e;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: Inter, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
  input {
    max-width: 136px;
    height: 20px;
  }
`;

export const ButtonBlock = styled.div`
  button {
    padding: 1.13rem 1.5rem 1.13rem 1.5rem;
  }
`;
