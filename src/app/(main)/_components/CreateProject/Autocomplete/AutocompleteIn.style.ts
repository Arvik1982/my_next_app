import styled from '@emotion/styled';
import Image from 'next/image';
import { StyledAutocompleteRootProps } from './AutocompleteIn.type';

export const InputContainer = styled.div<StyledAutocompleteRootProps>`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => (props.active ? 'rgb(42, 22, 202)' : 'rgba(180, 184, 204, 0.36)')};
  border-radius: 1rem;
`;
export const StyledAutocompleteRoot = styled.input`
  display: flex;
  align-items: center;
  font-family: Inter, sans-serif;
  font-weight: 400;
  border-radius: 1rem;
  color: #262633;
  background: rgb(247, 248, 250);
  border: none;
  padding: 0 0.25rem;
  gap: 5px;
  overflow: hidden;
  width: 100%;
  margin: 0;
  height: 2.6rem;
  ::placeholder {
    color: rgb(133, 136, 158);
  }
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

export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-top: 0.5rem;
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
  color: rgb(133, 136, 158);
  font-family: Inter, sans-serif;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
`;
export const IconSearch = styled(Image)`
  margin: 0 0.8rem 0 1rem;
`;
export const TextWrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 12.5rem;
  margin-left: 0.5rem;
`;
export const OptionContainer = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  &:hover {
    .aboutUser {
      display: block;
    }
    .translation {
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%);
    }
  }
`;
export const AvatarContainer = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: rgb(255, 255, 255);
  cursor: pointer;
`;
export const NameAuthor = styled.span`
  color: rgb(38, 38, 51);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  text-align: left;
`;
export const Nick = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(133, 136, 158);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  text-align: left;
`;
export const AboutUserWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;
export const AboutUser = styled.h2`
  display: none;
  color: rgb(38, 38, 51);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  text-align: left;
  border-bottom: 1px dashed rgb(38, 38, 51);
  z-index: 11111111;
`;
