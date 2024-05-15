import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import { StyleProps } from '@/app/components/ui/TabButtons/TabButtons.type';

export const MenuButton = styled.div`
  display: flex;
  padding: 6px;
  align-items: center;
  gap: 4px;
  background-color: #f7f8fa;
  border-radius: 24px;
  width: 100%;
`;

export const ButtonNavigation = styled(Button)<StyleProps>`
  background: ${(props) => (props.active && '#5533FF') || (props.active && props.isDisabled && '#b4b8cc2e')};
  color: ${(props) => (props.active ? '#fff' : '#262633')};
  border-radius: 20px;
  border: none;
  padding: 18px 24px;
  width: 100%;

  :hover {
    background: ${(props) => (props.active ? '#5533FF' : '#f7f8fa')};
    border: none;
  }

  &:first-of-type:disabled {
    background-color: #b4b8cc2e;
    color: #c9cddb;
    cursor: not-allowed;
  }
`;

export const ButtonName = styled.span`
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
