import styled from '@emotion/styled';
import { ListItemButton } from '@mui/material';
import Image from 'next/image';

export const CoverBlock = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1.5rem 0 0 0;
  gap: 1rem;
`;

export const AvatarBlock = styled.label`
  position: relative;
  width: 6.875rem;
  height: 6.875rem;
  flex-grow: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 6.25rem;
  span {
    color: rgb(38, 38, 51);
    font-family: Manrope;
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 2.5rem;
    letter-spacing: 0rem;
    text-align: center;
  }
  :hover {
    .hoverAvatarLoad {
      display: flex;
    }
  }
`;

export const CoverImg = styled.div`
  height: 6.875rem;
  box-sizing: border-box;
  border: 0.03rem solid rgba(0, 0, 0, 0.12);
  border-radius: 0.75rem;
  background: rgba(180, 184, 204, 0.26);
  flex-grow: 1;
  :hover {
    .hoverCoverLoad {
      display: flex;
    }
  }
`;

export const Video = styled.video`
  border-radius: 0.75rem;
  width: 100%;
  height: 6.875rem;
  object-fit: cover;
`;

export const Img = styled(Image)`
  width: 100%;
  height: 6.875rem;
  border-radius: 0.75rem;
  object-fit: cover;
`;

export const HoverIcon = styled(ListItemButton)`
  position: absolute;
  z-index: 1000;
  top: 2.1rem;
  left: 2.1rem;
  width: 2.75rem;
  height: 2.75rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  border: none;
  padding: 0;
  box-shadow: 0rem 0.25rem 0.75rem 0rem rgba(43, 44, 52, 0.16);
  background: rgb(255, 255, 255);
  :hover {
    background: rgb(255, 255, 255);
  }
`;

export const AvatarLoad = styled.label`
  display: none;
`;

export const CoverLoad = styled.label`
  display: none;
`;

export const InputFile = styled.input`
  visibility: hidden;
  position: absolute;
`;

export const HoverButton = styled(ListItemButton)`
  position: absolute;
  z-index: 1000;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.63rem 1.25rem 0.63rem 1rem;
  border: none;
  border-radius: 1rem;
  box-shadow: 0rem 0.25rem 0.75rem 0rem rgba(43, 44, 52, 0.16);
  background: rgb(255, 255, 255);
  :hover {
    background: rgb(255, 255, 255);
  }
`;

export const Text = styled.span`
  color: rgb(38, 38, 51);
  font-family: Inter;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0rem;
  text-align: center;
`;
