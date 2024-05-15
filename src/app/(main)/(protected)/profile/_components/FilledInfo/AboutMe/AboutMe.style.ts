import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  justify-content: flex-start;
  align-items: flex-start;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Title = styled.h3`
  margin: 0;
  color: rgb(133, 136, 158);
  font-family: Inter;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0rem;
  text-align: left;
`;

export const InfoBlock = styled.div`
  position: relative;
`;

export const Info = styled.div`
  max-height: 5rem;
  color: rgb(38, 38, 51);
  font-family: Inter;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0rem;
  text-align: left;
  overflow: hidden;
`;

export const More = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  background: inherit;
  border: none;
  padding: 0;
  margin-left: 2rem;
  color: rgb(85, 51, 255);
  font-family: Inter;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0rem;
  text-align: left;
`;
