import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Image from 'next/image';

export const Container = styled(Box)`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-radius: 24px;
`;

export const Video = styled.video`
  border-radius: 0.75rem;
  width: 100%;
  height: 7.5rem;
  border-radius: 0.75rem;
  object-fit: cover;
`;

export const CoverImg = styled(Image)`
  width: 100%;
  height: 7.5rem;
  border-radius: 0.75rem;
  object-fit: cover;
`;

export const EmptyCover = styled.div`
  border: 0.5px solid rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  height: 120px;
  background: rgba(180, 184, 204, 0.26);
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: rgb(255, 255, 255);
  margin-top: -42px;
  margin-left: 8px;
  span {
    color: rgb(38, 38, 51);
    font-family: Manrope;
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 2.5rem;
    letter-spacing: 0rem;
    text-align: center;
  }
`;

export const AvatarBlock = styled.div`
  display: flex;
`;

export const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-top: 8px;
`;

export const Name = styled.span`
  color: rgb(38, 38, 51);
  font-family: Manrope;
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
`;

export const Info = styled.span`
  color: rgb(133, 136, 158);
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-top: 8px;
`;

export const Post = styled.span`
  &:after {
    content: '・';
  }
`;

export const ControlBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 33px;
  margin-left: 16px;
  margin-bottom: 16px;
  height: 48px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 6px;
`;

export const ButtonEtc = styled(Image)`
  cursor: pointer;
  border: 1px solid rgba(180, 184, 204, 0.36);
  border-radius: 16px;
  padding: 12px;
`;

export const RedactorBtn = styled.div`
  cursor: pointer;
  border: 1px solid rgba(180, 184, 204, 0.36);
  border-radius: 16px;
  padding: 0 20px 0 16px;
  height: 48px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const RedactorText = styled.span`
  color: rgb(38, 38, 51);
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;

export const MarksContainter = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
