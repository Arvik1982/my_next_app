import styled from '@emotion/styled';
import { Popper } from '@mui/base/Popper';
import { Button } from '@mui/base/Button';
import Image from 'next/image';

export const StyledAutocompleteRoot = styled.div`
  font-family: Inter, sans-serif;
  font-weight: 400;
  border-radius: 1rem;
  color: #262633;
  background: #ffffff;
  border: 1px solid rgba(180, 184, 204, 0.36);
  display: flex;
  padding: 0.25rem;
  gap: 5px;
  overflow: hidden;
  max-width: 100%;
  margin: 0;

  &.focused {
    border-color: rgb(85, 51, 255);
  }
  &:focus-visible {
    outline: 0;
  }
`;
export const StyledInput = styled.input`
  color: rgb(133, 136, 158);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 8px 12px;
  outline: 0;
  flex: 1 0 auto;

  ::placeholder {
    color: rgb(133, 136, 158);
    font-family: Inter, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0;
  }
`;
export const StyledPopper = styled(Popper)`
  width: 300px;
  background: #ffffff;
  outline: 0;
  box-shadow:
    0 0.5rem 1.75rem 0 rgba(0, 0, 0, 0.3),
    0 0 0.13rem 0 rgba(0, 0, 0, 0.1);
  max-height: 224px;
  border-radius: 12px;
  margin: 0.4rem;
  z-index: 2;
  div {
    position: relative;
    z-index: 1001;
    width: 300px;
    padding: 16px;
  }
`;
export const StyledListbox = styled.ul`
  font-family: Inter, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 1rem;
  margin: 0.25rem 10px;
  border-radius: 0.75rem;
  overflow: auto;
  outline: 0;
  max-height: 218px;
  z-index: 1;
  color: #262633;
  ::-webkit-scrollbar {
    width: 0.625rem;
    border-radius: 0.38rem;
    background: rgb(236, 237, 242);
    margin-right: 5px;
  }

  ::-webkit-scrollbar-thumb {
    width: 1rem;
    border-radius: 0.63rem;
    box-shadow: 0 0.5rem 1.75rem 0 rgba(0, 0, 0, 0.3);
    background: rgb(255, 255, 255);
  }
`;
export const StyledNoOptions = styled.li`
  list-style: none;
  padding: 8px;
  cursor: default;
`;
export const Label = styled.span`
  color: #262633;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
`;

export const StyledOption = styled.li`
  list-style: none;
  padding: 5px 18px;
  cursor: default;
  max-width: 100%;
  color: rgb(38, 38, 51);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
  &:last-of-type {
    border-bottom: none;
  }
  &:hover {
    cursor: pointer;
  }

  &[aria-selected='true'] {
    background-color: rgba(180, 184, 204, 0.36);
    color: rgb(42, 22, 202);
  }

  &.base--focused,
  &.base--focusVisible {
    background-color: rgba(180, 184, 204, 0.36);
    color: rgb(42, 22, 202);
  }

  &[aria-selected='true'].base--focused,
  &[aria-selected='true'].base--focusVisible {
    background-color: rgba(180, 184, 204, 0.36);
    color: rgb(42, 22, 202);
  }
`;
export const StyledClearIndicator = styled(Button)`
  outline: 0;
  box-shadow: none;
  border: 0;
  border-radius: 4px;
  background-color: transparent;
  align-self: center;
  padding: 0 2px;

  &:hover {
    background-color: rgba(180, 184, 204, 0.36);
    cursor: pointer;
  }

  & > svg {
    transform: translateY(2px) scale(0.9);
  }
`;
export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
`;
export const Filters = styled.span`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem 0.75rem;
  border-radius: 1.13rem;
  background: rgba(180, 184, 204, 0.12);
  color: rgb(38, 38, 51);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
`;
export const Exit = styled(Image)`
  cursor: pointer;
`;
