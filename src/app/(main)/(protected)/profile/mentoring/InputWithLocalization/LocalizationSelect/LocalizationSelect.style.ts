import styled from '@emotion/styled';
import { LocalizationPropsStyle } from './LocalizationSelect.type';

export const SelectWrapper = styled.div`
  display: flex;
  gap: 0.125rem;
`;

export const Localization = styled.button<LocalizationPropsStyle>`
  padding: 3px 6px 3px 6px;
  border-radius: 6px;
  border: none;
  background: ${(props) => (props.active ? '#24292E' : '#B4B8CC1F')};
  color: ${(props) => (props.active ? '#fff' : '#000')};
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0px;
`;
