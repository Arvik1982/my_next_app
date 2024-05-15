import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Image from 'next/image';

export const CardContainer = styled.div`
  border-radius: 16px;
  background-color: #fff;
  align-items: stretch;
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
  overflow: hidden;
`;
export const User = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;
export const AvatarContainer = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
`;
export const UserInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
`;
export const ProfileInfo = styled.div`
  flex-direction: column;
  display: flex;
  height: 3rem;
  justify-content: space-between;
`;

export const Name = styled.span`
  color: rgb(36, 41, 46);
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;
`;
export const AboutProductWrapper = styled.div`
  display: flex;
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
`;
export const ButtonText = styled.span`
  text-transform: lowercase;
  :first-letter {
    text-transform: uppercase;
  }
`;
export const Ready = styled.span`
  display: flex;
  align-items: center;
  border-radius: 6px;
  background-color: rgba(0, 168, 90, 0.12);
  padding: 3px 6px;
  margin-left: 4px;
  color: #00a85a;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
`;
export const ProfileContainer = styled.div`
  display: flex;
`;
export const ConnectionButton = styled(Button)`
  border-radius: 16px;
  padding: 12px 20px;
  background: #53f;
  box-shadow: none;
  color: #fff;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-transform: lowercase;

  &:hover {
    background-color: #53f;
    box-shadow: none;
  }
`;
export const NavigationButtons = styled.div`
  display: flex;
  gap: 6px;
`;
export const Projects = styled.div`
  display: flex;
  align-items: stretch;
  gap: 8px;
  align-self: stretch;
`;

export const ProjectCard = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.12);
`;
