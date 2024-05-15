import styled from '@emotion/styled';

export const Container = styled.div`
  min-width: 300px;
  width: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  border-radius: 1rem;
  margin-right: 19px;
  margin-left: auto;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const PriceWrapper = styled.div`
  display: flex;
  gap: 0.375rem;
  align-items: center;
`;
export const Label = styled.span`
  color: #262633;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
`;
