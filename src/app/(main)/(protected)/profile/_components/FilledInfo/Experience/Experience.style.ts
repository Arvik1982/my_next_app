import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-bottom: 0.75rem;
  cursor: pointer;
`;

export const Title = styled.h2`
  color: rgb(133, 136, 158);
  font-family: Inter;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0rem;
  text-align: left;
  margin: 0;
`;
export const Content = styled.div`
  width: 100%;
  & > div {
    padding: 0;
  }
`;

export const ImageBlock = styled.div`
  overflow: hidden;
  height: 2.063rem;
  img {
    padding-left: 3.75rem;
    width: 100%;
  }
`;
