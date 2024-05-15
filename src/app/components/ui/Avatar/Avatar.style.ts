import styled from '@emotion/styled';
import Image from 'next/image';

export const Avatar = styled.div`
  width: 100%;
  height: 100%;
  min-width: 2rem;
  min-height: 2rem;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  flex: none;
  order: 1;
  flex-grow: 0;
  box-sizing: border-box;
  border: 0.03rem solid rgba(0, 0, 0, 0.12);
  border-radius: 6.25rem;
  overflow: hidden;
`;

export const Video = styled.video`
  object-fit: cover;
`;

export const Img = styled(Image)`
  object-fit: cover;
`;

export const AvatarText = styled.span`
  color: rgb(38, 38, 51);
  font-family: Manrope;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 3rem;
  letter-spacing: 0rem;
  text-align: center;
`;
