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
export const CoverImg = styled.div`
  border: 0.5px solid rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  height: 120px;
  background: rgba(180, 184, 204, 0.26);
`;

export const AvatarContainer = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: rgba(255, 255, 255);
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
export const NameWrapper = styled.div`
  display: flex;
  gap: 4px;
`;
export const Name = styled.span`
  color: rgb(38, 38, 51);
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
`;

export const Info = styled.div`
  display: flex;
  color: rgb(133, 136, 158);
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-top: 8px;
`;

export const DescriptionText = styled.span`
  color: #85889e;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  &:after {
    content: '•';
    margin: 0 6px;
  }
  &:last-child:after {
    content: none;
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

export const ButtonBookmark = styled(Image)`
  cursor: pointer;
  padding: 12px;
  border-radius: 16px;
  border: 1px solid rgba(180, 184, 204, 0.36);
`;

export const Expert = styled.span`
  display: flex;
  padding: 3px 6px;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  margin-left: 8px;
  background: rgba(180, 184, 204, 0.12);
  color: #53f;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  text-transform: lowercase;
  cursor: pointer;
`;
export const TextWrapper = styled.span`
  white-space: nowrap;

  :first-letter {
    text-transform: uppercase;
  }
`;
export const Ready = styled.span`
  display: flex;
  align-items: center;
  padding: 0.19rem 0.38rem;
  border-radius: 0.38rem;
  background: rgba(0, 168, 90, 0.12);
  color: rgb(0, 168, 90);
  font-family: Inter, sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 0.88rem;
  letter-spacing: 0;
  text-align: left;
`;
