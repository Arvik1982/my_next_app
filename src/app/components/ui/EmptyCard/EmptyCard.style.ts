import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  border-radius: 24px;
  background: rgb(255, 255, 255);
`;

export const IconBlock = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 16px;
  background: rgba(180, 184, 204, 0.26);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const MainText = styled.span`
  color: rgb(38, 38, 51);
  font-family: Manrope;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
`;

export const SecondaryText = styled.span`
  color: rgb(133, 136, 158);
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
`;
