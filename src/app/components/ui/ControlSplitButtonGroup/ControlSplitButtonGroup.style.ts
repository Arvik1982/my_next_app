import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import { Active } from '@/app/components/ui/SplitButtonGroup/SplitButtonGroup.type';

export const MenuButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.25rem;
  align-items: center;
  gap: 0.25rem;
  background-color: rgba(180, 184, 204, 0.26);
  border-radius: 1rem;
`;

export const ButtonNavigation = styled(Button)<Active>`
  background-color: ${(props) => (!props.active ? '' : '#FFF')};
  border-radius: 0.75rem;
  border: none;
  padding: 0.63rem 2rem;
  width: 100%;
  :hover {
    background-color: #fff;
    border: none;
  }
`;
export const ButtonName = styled.span`
  color: #262633;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  text-transform: lowercase;

  &:first-letter {
    text-transform: uppercase;
  }
`;
