import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import { Active } from '@/app/components/ui/SplitMiniButtonGroup/SplitMiniButtonGroup.type';

export const MenuButton = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  background-color: rgb(255, 255, 255);
  width: fit-content;
`;

export const ButtonNavigation = styled(Button)<Active>`
  width: 1.5rem;
  background-color: ${(props) => (!props.active ? 'rgba(180, 184, 204, 0.12)' : '#24292E')};
  border-radius: 0.38rem;
  min-width: fit-content;
  border: none;
  :hover {
    background-color: ${(props) => (!props.active ? 'rgba(180, 184, 204, 0.12)' : '#24292E')};
    border: none;
  }
`;
export const ButtonName = styled.span<Active>`
  color: ${(props) => (!props.active ? 'rgb(38, 38, 51)' : 'rgb(255, 255, 255)')};
  font-family: Inter;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 0.88rem;
  letter-spacing: 0;
  text-align: left;
  text-transform: lowercase;

  :hover {
    color: ${(props) => (!props.active ? 'rgb(38, 38, 51)' : 'rgb(255, 255, 255)')};
  }

  &:first-letter {
    text-transform: uppercase;
  }
`;
