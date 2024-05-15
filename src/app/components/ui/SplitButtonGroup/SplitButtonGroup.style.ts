import styled from '@emotion/styled';
import { Active } from '@/app/components/ui/SplitButtonGroup/SplitButtonGroup.type';

export const MenuButton = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
  background-color: rgba(180, 184, 204, 0.26);
  border-radius: 16px;
  width: fit-content;
  div {
    display: flex;
    gap: 4px;
  }
`;

export const ButtonNavigation = styled.div<Active>`
  background-color: ${(props) => (!props.active ? '' : '#FFF')};
  border-radius: 12px;
  border: none;
  padding: 10px 16px;
  text-transform: lowercase;
  &:first-letter {
    text-transform: uppercase;
  }
  :hover {
    background-color: #fff;
    border: none;
  }
`;
export const ButtonName = styled.span`
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
