import styled from '@emotion/styled';
import Image from 'next/image';

export const Cover = styled.video`
  width: 100%;
  border-radius: 1rem;
  position: relative;
  object-fit: cover;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
export const CoverImg = styled(Image)`
  width: 100%;
  border-radius: 1rem;
  height: 100%;
  max-height: 244px;
  filter: brightness(0.5);
`;
export const AboutProject = styled.div`
  position: absolute;
  bottom: 1rem;
`;
export const NameProject = styled.h2`
  color: rgb(255, 255, 255);
  font-size: 1.13rem;
  font-weight: 700;
  line-height: 1.38rem;
  text-align: left;
  padding-left: 1rem;
`;
export const Author = styled.h2`
  color: rgb(255, 255, 255);
  font-size: 0.81rem;
  font-weight: 400;
  line-height: 1.13rem;
  text-align: left;
  margin-left: 1rem;
`;
export const ContainerProjectCover = styled.div`
  position: relative;
  width: calc(50% - 0.5rem);
  max-height: 244px;
`;
