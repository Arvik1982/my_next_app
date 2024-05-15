import styled from '@emotion/styled';
import { Avatar, ListItem, ListItemText } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  gap: 1.25rem;
`;

export const ItemsBlock = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 19.813rem;
  height: fit-content;
  border-radius: 24px;
  padding: 0.5rem;
`;

export const StyledListItem = styled(ListItem)`
  padding: 0.75rem;
`;

export const Logo = styled(Avatar)`
  height: 24px;
  width: 24px;
  margin-right: 12px;
  background-color: white;
`;

export const Text = styled(ListItemText)<{ isLast?: boolean }>`
  & .MuiTypography-root.MuiListItemText-primary {
    font-family: Inter, sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.25rem;
    letter-spacing: 0;
    text-align: left;
    color: ${(props) => (props.isLast ? '#FF3333' : ' #262633')};
  }

  & .MuiTypography-root.MuiListItemText-secondary {
    color: #85889e;
    font-family: Inter, sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: right;
  }
`;

export const ContainerBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
`;
