import OutlinedInput from '@mui/material/OutlinedInput';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Link from 'next/link';

export const LogoLink = styled(Link)`
  display: flex;
  flex-basis: calc(25% - 0.75rem);
  text-decoration: none;
`;

export const Container = styled.div`
  display: flex;
  height: 3rem;
  padding: 0.75rem 1.5rem 1.5rem;
  // width: 100%
  align-items: center;
  justify-content: start;
`;

export const LogoBlock = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Logo = styled.div`
  width: 36px;
  height: 36px;
  background: #5533ff;
`;

export const Name = styled.span`
  color: #262633;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
`;

export const MUIButton = styled(Button)`
  height: 48px;
  background-color: #5533ff;
  border-radius: 16px;
  padding: 0 20px;
  color: #ffffff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-transform: none;
  font-family: 'Manrope', sans-serif;
  box-shadow: none;
  &:hover {
    background: rgb(43, 0, 255);
    box-shadow: none;
  }
  &:active {
    background: rgb(48, 20, 184);
  }
`;
export const CreateAndSearchContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: start;
  width: calc(100% - 23.75rem);
  gap: 0.375rem;
  min-width: 500px;
`;
export const AvatarAndLangSelect = styled.div`
  display: flex;
  // justify-content: center;
`;
export const SearchForm = styled.form`
  flex-grow: 1;
`;
export const Search = styled(OutlinedInput)`
  padding: 12px 16px;
  width: 100%;
  height: 48px;
  border-radius: 16px;
  background-color: #b4b8cc1f;
  font-family: 'Manrope', sans-serif;
  gap: 12px;

  & > .MuiInputAdornment-positionStart {
    margin-right: 0;
  }

  & > fieldset {
    border: none;
  }

  &::placeholder {
    color: #85889e;
  }
`;
export const AvatarContainer = styled.div`
  width: 3rem;
  height: 3rem;
  margin-left: 2.5rem;
`;
export const ButtonCreate = styled(Button)`
  border-radius: 1rem;
  background: rgb(36, 41, 46);
  display: flex;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  &:hover {
    background: rgb(36, 41, 46);
  }
`;
export const ButtonText = styled.span`
  color: rgb(255, 255, 255);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: center;
  text-transform: lowercase;
  &:first-letter {
    text-transform: uppercase;
  }
`;
