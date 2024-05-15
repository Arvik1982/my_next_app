import styled from '@emotion/styled';

export const Expert = styled.span`
  display: flex;
  height: fit-content;
  align-items: center;
  padding: 3px 6px;
  gap: 4px;
  border-radius: 0.375rem;
  margin-left: 0.5rem;
  background: rgba(180, 184, 204, 0.12);
  color: #53f;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-style: normal;
  cursor: pointer;
  font-weight: 500;
  line-height: 14px;
  text-transform: lowercase;
`;

export const TextButton = styled.span`
  text-transform: lowercase;
  :first-letter {
    text-transform: uppercase;
  }
`;
