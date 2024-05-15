import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.5rem;
  border-radius: 1.5rem;
  background: #fff;
`;

export const CardRow = styled.div<{ withoutImage?: boolean }>`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  ${(props) => props.withoutImage && 'padding-left: 2.75rem'};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.75rem;
  overflow: hidden;
  background: rgba(180, 184, 204, 0.26);
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 2.75rem);
  align-items: center;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  padding: 0.125rem 0 0.125rem 0;
  margin-left: 1rem;
`;

export const MainText = styled.span`
  color: rgb(38, 38, 51);
  font-family: Inter, sans-serif;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0;
`;
export const MiddleText = styled.span`
  color: rgb(38, 38, 51);
  font-family: Inter, sans-serif;
  font-size: 0.813rem;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: 0;
`;

export const BottomText = styled.span`
  color: rgb(133, 136, 158);
  font-family: Inter, sans-serif;
  font-size: 0.813rem;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: 0;
`;

export const MoreButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  padding: 0;
`;

export const TreeVector = styled.div<{ offset: number }>`
  position: absolute;
  left: 1.375rem;
  top: -${(props) => 0.5 + 3.375 * props.offset}rem;
  height: ${(props) => 1.3125 + 3.375 * props.offset}rem;
  width: 2.0625rem;
  border-left: 1px solid #b4b8cccc;
  border-bottom: 1px solid #b4b8cccc;
  border-radius: 0 0 0 0.75rem;
  bottom:;
`;
