import styled from '@emotion/styled';
import Image from 'next/image';
import { StyledAutocompleteRootProps } from './AutocompleteIntroduction.type';

export const StyledAutocompleteRoot = styled.input<StyledAutocompleteRootProps>`
  display: flex;
  align-items: center;
  font-family: Inter, sans-serif;
  font-weight: 400;
  border-radius: 1rem;
  color: #262633;
  background: #ffffff;
  border: 1px solid ${(props) => (props.active ? 'rgb(42, 22, 202)' : 'rgba(180, 184, 204, 0.36)')};
  padding: 0 0.25rem;
  gap: 5px;
  overflow: hidden;
  max-width: 290px;
  width: 100%;
  margin: 0;
  height: 3rem;
  input {
    padding: 0 0 0 10px;
  }
  & fieldset {
    border: none;

    &focus {
      border-color: transparent;
    }
  }
  &.focused {
    border-color: rgb(85, 51, 255);
  }
  &:focus-visible {
    outline: 0;
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
export const Label = styled.span`
  color: #262633;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
`;
