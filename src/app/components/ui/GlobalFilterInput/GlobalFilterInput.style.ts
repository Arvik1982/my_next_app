import styled from '@emotion/styled';
import Image from 'next/image';
import { StyledAutocompleteRootProps } from './GlobalFilterInput.type';
export const InputContainer = styled.div<StyledAutocompleteRootProps>`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => (props.active ? 'rgb(42, 22, 202)' : 'rgba(180, 184, 204, 0.36)')};
  border-radius: 1rem;
  width: 100%;
`;
export const StyledAutocompleteRoot = styled.input`
  display: flex;
  align-items: center;
  font-family: Inter, sans-serif;
  font-weight: 400;
  border-radius: 1rem;
  color: #262633;
  border: none;
  padding: 0 0.25rem;
  gap: 5px;
  overflow: hidden;
  width: 100%;
  margin: 0;
  height: 2.6rem;
  input {
    padding: 0 0 0 10px;
  }
  & fieldset {
    border: none;

    &focus {
      border-color: transparent;
    }
  }
  &:focus-visible {
    outline: 0;
  }
`;

export const IconSearch = styled(Image)`
  margin: 0 0.8rem 0 1rem;
`;
