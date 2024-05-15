import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: calc(100% - 3rem);
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 1.5rem;
  background: rgb(255, 255, 255);
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.div`
  color: rgb(38, 38, 51);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.75rem;
  letter-spacing: 0;
`;

export const Description = styled.div`
  color: rgb(133, 136, 158);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375rem;
  letter-spacing: 0;
`;
