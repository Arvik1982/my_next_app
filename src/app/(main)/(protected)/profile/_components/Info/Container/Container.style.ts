import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const ContainerBox = styled(Box)`
  flex-direction: column;
  gap: 16px;
  background-color: #fff;
  border-radius: 16px;
`;

export const BottomBlock = styled.div`
  color: rgb(179, 184, 204);
  font-family: Inter;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

export const ComplaintBtn = styled.span`
  cursor: pointer;
`;
