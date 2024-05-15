import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
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
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
`;

export const ItemBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem 0.75rem 0.5rem 0.75rem;
  flex: none;
  order: 0;
  flex-grow: 0;
  box-sizing: border-box;
  border: 0.06rem solid rgba(180, 184, 204, 0.36);
  border-radius: 1.13rem;
`;

export const Item = styled.div`
  display: flex;
  gap: 0.5rem;
  color: rgb(38, 38, 51);
  font-family: Inter;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: 0rem;
  text-align: left;
  img {
    cursor: pointer;
  }
`;
