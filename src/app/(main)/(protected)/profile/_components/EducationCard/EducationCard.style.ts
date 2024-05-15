import styled from '@emotion/styled';
import { Avatar, ListItem, ListItemText } from '@mui/material';

export const StyledListItem = styled(ListItem)`
  background-color: #fff;
  border-radius: 24px;
  padding: 24px;
`;

export const Logo = styled(Avatar)`
  width: 44px;
  height: 44px;
  border-radius: 16px;
  margin-right: 16px;
  background-color: #b4b8cc42;
`;

export const Text = styled(ListItemText)`
  .MuiListItemText-primary {
    color: rgb(38, 38, 51);
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
  }

  .MuiListItemText-secondary {
    color: rgb(38, 38, 51);
    font-family: 'Inter';
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

export const DatesText = styled.span`
  color: rgb(133, 136, 158);
  font-family: 'Inter';
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
`;
