import styled from '@emotion/styled';
import { MenuItem } from '@mui/material';
import Image from 'next/image';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const Count = styled.h2`
  margin: 0 0.625rem;
  color: rgb(255, 255, 255);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 0.88rem;
  text-align: left;
`;
export const PlaceholderStyle = styled.h2`
  bottom: 0;
  width: 8.75rem;
  margin-left: 1rem;
  cursor: pointer;
  color: rgb(255, 255, 255);
  font-size: 0.81rem;
  font-weight: 400;
  line-height: 1.13rem;
  text-align: left;
`;
export const OptionWrapper = styled.div`
  max-height: 15.625rem;
  z-index: 9999;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0.25rem;
    margin-right: 0.3125rem;
    background-color: rgba(180, 184, 204, 0.28);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(180, 184, 204, 0.36);
    border-radius: 0.25rem;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;
export const OptionContainer = styled.div`
  background-color: #ffffff;
  border-radius: 1rem;
  position: absolute;
  top: 1.625rem;
  width: auto;
  min-width: 20.5rem;
  padding: 1rem;
`;
export const Option = styled(MenuItem)`
  z-index: 9999;
  width: 100%;
  font-family: Inter, sans-serif;
  color: #262633;
  font-size: 1rem;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  &:hover {
    .aboutUser {
      display: block;
    }
  }
`;
export const AvatarContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
`;
export const TextWrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin-left: 0.5rem;
`;
export const NameAuthor = styled.h2`
  color: rgb(38, 38, 51);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  text-align: left;
`;
export const Nick = styled.h2`
  color: rgb(133, 136, 158);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  text-align: left;
`;
export const AboutUser = styled.h2`
  display: none;
  color: rgb(38, 38, 51);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  text-align: left;
  border-bottom: 1px dashed rgb(38, 38, 51);
  margin-left: 0.625rem;
`;
