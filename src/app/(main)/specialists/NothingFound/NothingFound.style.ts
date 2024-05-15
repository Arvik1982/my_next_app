import styled from '@emotion/styled';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border-radius: 24px;
  background-color: rgb(255, 255, 255);
  height: fit-content;
`;
export const Search = styled.div`
  padding: 10px;
  border-radius: 16px;
  background: rgba(180, 184, 204, 0.26);
`;

export const SearchImage = styled(Image)`
  filter: brightness(0);
`;
export const Title = styled.p`
  color: rgb(38, 38, 51);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0;
  text-align: center;
`;
export const Reference = styled.h2`
  color: rgb(133, 136, 158);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5rem;
  text-align: center;
`;
