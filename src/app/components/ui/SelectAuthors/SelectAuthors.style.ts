import styled from '@emotion/styled';
import { MenuItem, Select } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
`;

export const StyledSelect = styled(Select)`
  border-radius: 1rem;
  height: 1rem;
  padding-right: 1rem;
  font-family: Inter, sans-serif;
  color: #262633;
  font-size: 1rem;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  &:hover {
    &.MuiOutlinedInput-root {
      & fieldset {
        border: none;
      }
    }
  }
  & {
    &.MuiOutlinedInput-root {
      & fieldset {
        border: none;
      }
    }
  }
  & fieldset {
    border: none;

    &focus {
      border-color: transparent;
    }
  }
`;

export const Option = styled(MenuItem)`
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
export const PlaceholderStyle = styled.h2`
  color: rgb(255, 255, 255);
  font-size: 0.81rem;
  font-weight: 400;
  line-height: 1.13rem;
  text-align: left;
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
  margin-left: 10px;
`;
