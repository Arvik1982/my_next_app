import styled from '@emotion/styled';
import { Button } from '@mui/material';

interface Props {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;

export const Label = styled.span`
  color: #262633;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
`;

export const StyledButton = styled(Button)<Props>`
  background-color: ${(props) => (props.active ? 'rgba(180, 184, 204, 0.42)' : 'rgba(180, 184, 204, 0.12)')};
  border-radius: 18px;
  padding: 10px 12px;
  color: #262633;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: 0;
  text-align: left;
  text-transform: none;

  &:hover {
    background-color: #f1f2f6;
  }
`;
