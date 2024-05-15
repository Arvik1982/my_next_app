import styled from '@emotion/styled';
import { ListItem } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;

export const Label = styled.label``;

export const StyledInput = styled.input`
  display: none;
`;

export const MiniImgContainer = styled(ListItem)`
  display: flex;
  gap: 1rem;
  padding: 0;
  align-items: center;
  & > img {
    border-radius: 0.75rem;
    overflow: hidden;
  }
`;

export const TextsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

export const FileName = styled.span`
  font-family: Inter, sans-serif;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 500;
`;
export const FileFormat = styled.span`
  font-family: Inter, sans-serif;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: 0px;
  color: #85889e;
  text-transform: uppercase;
`;
