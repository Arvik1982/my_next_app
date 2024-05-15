import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Image from 'next/image';

export const BoxContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 16px;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const AboutCompany = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const CompanyName = styled.span`
  color: rgb(36, 41, 46);
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;
`;
export const Description = styled.div`
  display: flex;
  align-items: center;
`;

export const DescriptionText = styled.span`
  display: flex;
  align-items: center;
  color: rgb(133, 136, 158);
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0;
  text-align: left;

  &:after {
    content: '•';
    margin: 0 6px;
  }
  &:last-child:after {
    content: none;
  }
`;
