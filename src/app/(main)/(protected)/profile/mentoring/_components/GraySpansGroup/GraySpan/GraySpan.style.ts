import styled from '@emotion/styled';

export const GraySpan = styled.span<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-radius: 1.125rem;
  background: #${(props) => (props.active ? '24292E' : 'b4b8cc1f')};
  align-items: center;
  padding: 0.5rem 0.75rem;
  font-family: Inter;
  color: #${(props) => (props.active ? 'fff' : '000')};
  font-size: 0.875rem;
  line-height: 1rem;
  cursor: pointer;
  &:hover {
    background: #${(props) => (props.active ? '' : 'b4b8cc40')};
  }
  transition: ease 100ms;
`;
