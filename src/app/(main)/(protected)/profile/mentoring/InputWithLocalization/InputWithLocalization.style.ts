import styled from '@emotion/styled';
import { TextareaAutosize } from '@mui/material';

export const InputWithLocalizationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledTextareaAutosize = styled(TextareaAutosize)`
  color: #262633;
  font-variant-numeric: lining-nums proportional-nums;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(180, 184, 204, 0.36);
  border-radius: 1rem;
  min-height: 4.125rem;
  font-family: Inter, sans-serif;
  vertical-align: top;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  resize: none;

  fieldset {
    border-radius: 1rem;
  }

  &::placeholder {
    color: #85889e;
  }
`;

export const SymbolsLeft = styled.div`
  text-align: right;
  color: rgb(133, 136, 158);
  font-family: Inter;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
`;
