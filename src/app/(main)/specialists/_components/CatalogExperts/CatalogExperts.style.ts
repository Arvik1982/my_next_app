import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const CardContainer = styled.div``;

export const Container = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 24px;
  padding: 24px;
`;
export const UserInfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 3rem;
`;
export const ContactPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  box-sizing: border-box;
  border: 1px solid rgba(180, 184, 204, 0.36);
  border-radius: 16px;
`;
export const Price = styled.span`
  color: rgb(133, 136, 158);
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
`;
export const PriceValue = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;
  color: #24292e;
`;
export const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const DescriptionSkills = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  color: #262633;
  margin: 0;
`;
export const Label = styled.span`
  color: #85889e;
`;
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
`;
export const ProfileContainer = styled.div`
  display: flex;
`;
export const Name = styled.span`
  color: rgb(36, 41, 46);
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;
  cursor: pointer;
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
export const TextButton = styled.span`
  text-transform: lowercase;
  :first-letter {
    text-transform: uppercase;
  }
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
