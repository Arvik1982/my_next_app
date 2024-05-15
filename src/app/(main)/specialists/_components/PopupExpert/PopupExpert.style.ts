import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import { TextField } from '@mui/material';

export const Container = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1.5rem;
  background: rgb(255, 255, 255);
  width: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1.5rem;
  gap: 24px;
`;
export const UserInfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 3rem;
`;
export const ContactPrice = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
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
  gap: 4px;
`;
export const ProfileContainer = styled.div`
  display: flex;
  gap: 4px;
`;
export const Name = styled.span`
  color: rgb(36, 41, 46);
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;
`;
export const ExpertText = styled.span`
  color: rgb(38, 38, 51);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.75rem;
  letter-spacing: 0;
  text-align: left;
`;
export const Expert = styled.div`
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
export const TextWrapper = styled.span`
  white-space: nowrap;

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
export const FirstMeet = styled.span`
  border-radius: 0.38rem;
  background: rgba(180, 184, 204, 0.12);
  padding: 0.19rem 0.38rem;
  color: rgb(85, 51, 255);
  font-family: Inter, sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 0.88rem;
  letter-spacing: 0;
  text-align: left;
`;
export const Exit = styled(Image)`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
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
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem;
  box-sizing: border-box;
  border: 0.06rem solid rgba(180, 184, 204, 0.36);
  border-radius: 1rem;
`;
export const ContactPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100%;
`;
export const Input = styled(TextField)`
  width: 100%;
  overflow-y: auto;
  height: 100px;

  div {
    border-radius: 16px;
    margin-top: 1px;
    overflow-y: auto;
    background: rgba(180, 184, 204, 0.12);
    height: 100%;
    align-items: flex-start;
  }

  input {
    height: 100%;
    color: #262633;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    border: none;
    border-radius: 1rem;
    background: rgba(180, 184, 204, 0.12);
    word-wrap: break-word;
    overflow-y: auto;
  }

  fieldset {
    border: none;
    border-radius: 1rem;
  }
`;
export const SendMessage = styled(Button)`
  width: 100%;
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.13rem 1.5rem;
  border-radius: 1.25rem;
  background: rgb(85, 51, 255);
  text-transform: lowercase;
  :hover {
    background: rgb(85, 51, 255);
  }
`;
export const TextSendMessage = styled.span`
  color: rgb(255, 255, 255);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: center;
  white-space: nowrap;
  :first-letter {
    text-transform: uppercase;
  }
`;
