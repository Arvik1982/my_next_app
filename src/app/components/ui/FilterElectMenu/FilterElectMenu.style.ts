import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import { Active } from './FilterElectMenu.type';

export const MenuButton = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
  gap: 0.19rem;
  background-color: rgba(180, 184, 204, 0.26);
  border-radius: 16px;
  width: 100%;
`;

export const ButtonNavigation = styled(Button)<Active>`
  background-color: ${(props) => (!props.active ? '' : '#FFF')};
  border-radius: 12px;
  border: none;
  padding: 10px 16px;
  :hover {
    background-color: #fff;
    border: none;
  }
`;
export const ButtonName = styled.span`
  margin-left: 0.75rem;
  color: #262633;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-transform: lowercase;
  &:first-letter {
    text-transform: uppercase;
  }
`;
