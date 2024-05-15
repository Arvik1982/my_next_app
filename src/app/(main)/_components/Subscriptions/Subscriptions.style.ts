import styled from '@emotion/styled';
import { ListItemText } from '@mui/material';
import Image from 'next/image';

export const Title = styled.span`
  position: static;
  width: 78px;
  height: 20px;
  padding: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0 0 24px;
  color: rgb(133, 136, 158);
  opacity: 0.12;
`;
export const ItemText = styled(ListItemText)`
  font-size: 16px;
  font-style: normal;
  line-height: 20px;
  font-weight: 600;
  letter-spacing: 0;
  text-align: left;
`;
export const Logo = styled(Image)`
  border-radius: 12px;
`;
export const Company = styled.div`
  width: 216px;
  height: 40px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  padding: 0 8px;
`;
