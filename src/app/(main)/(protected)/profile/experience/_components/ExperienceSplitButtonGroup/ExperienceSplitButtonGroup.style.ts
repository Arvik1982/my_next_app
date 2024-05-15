import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import { Active } from '@/app/components/ui/SplitButtonGroup/SplitButtonGroup.type';

export const MenuButton = styled.div`
  display: flex;
  padding: 0.375rem;
  align-items: center;
  gap: 0.375rem;
  background-color: rgba(180, 184, 204, 0.26);
  border-radius: 1.5rem;
  width: calc(100% - 0.75rem);
`;

export const ButtonNavigation = styled(Button)<Active>`
  background-color: ${(props) => (props.active ? '#5533FF' : '')};
  border-radius: 1.25rem;
  border: none;
  width: 100%;
  padding: 1.125rem;
  color: ${(props) => (props.active ? '#FFF' : '#262633')};
  :hover {
    background-color: ${(props) => (props.active ? '#5533FF' : '#fff')};
    border: none;
  }
  :disabled {
    background-color: ${(props) => props.active && '#B4B8CC2E'};
    color: ${(props) => props.active && '#c9cddb'};
  }
`;
export const ButtonName = styled.span`
  color: inherit;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Inter;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-transform: lowercase;
  &:first-letter {
    text-transform: uppercase;
  }
`;
