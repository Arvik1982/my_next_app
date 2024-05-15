import styled from '@emotion/styled';
import { Box, ListItemText, ListItem as LI, List } from '@mui/material';

export const MarkContainer = styled.div`
  position: relative;
`;

export const BoxContainer = styled(Box)`
  position: absolute;
  left: 0;
  top: 1.8rem;
  padding: 6px;
  width: 11.25rem;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1.75rem 0 #0000004d;
  background: rgb(255, 255, 255);
  z-index: 99999;
`;

export const BlankImage = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;

export const StyledList = styled(List)`
  padding: 0;
`;

export const StyledListItem = styled(LI)`
  border-radius: 0.75rem;
  overflow: hidden;
  & > div {
    padding: 10px;
  }
`;

export const ListText = styled(ListItemText)`
  & > span {
    margin-left: 0.5rem;
    color: rgb(38, 38, 51);
    font-family: Inter, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0;
    text-align: left;
  }
`;

export const Ready = styled.div<{ status: number }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 6px;
  background-color: #${(props) => (props.status === 1 ? '00a85a1f' : 'b4b8cc1f')};
  padding: 3px 6px;
  margin-left: 4px;
  color: #${(props) => (props.status === 1 ? '00a85a' : 'b4b8cc')};

  font-variant-numeric: lining-nums proportional-nums;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
`;
