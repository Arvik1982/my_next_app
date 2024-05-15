import styled from '@emotion/styled';
import Image from 'next/image';

export const Cover = styled.video`
  border-radius: 1rem;
  position: relative;
  object-fit: cover;
  max-height: 244px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
export const CoverImg = styled(Image)`
  width: 88%;
  border-radius: 1rem;
  height: 100%;
  max-height: 244px;
  object-fit: cover;
  filter: brightness(0.5);
`;
