import styled from '@emotion/styled';
import Image from 'next/image';

export const Project = styled(Image)`
  width: 100%;
  height: auto;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  gap: 8px;
  align-items: stretch;
`;
