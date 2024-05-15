import styled from '@emotion/styled';
import { MenuItem, Select } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledSelect = styled(Select)`
  border-radius: 1rem;
  height: 3rem;
  padding-left: 1rem;
  font-family: Inter, sans-serif;
  color: #262633;
  font-size: 1rem;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  &:hover {
    &.MuiOutlinedInput-root {
      & fieldset {
        border: 1px solid rgba(180, 184, 204, 0.36);
      }
    }
  }
  & {
    &.MuiOutlinedInput-root {
      & fieldset {
        border: 1px solid rgba(180, 184, 204, 0.36);
      }
    }
  }
  & fieldset {
    border: 1px solid rgba(180, 184, 204, 0.36);

    &focus {
      border-color: transparent;
    }
  }
`;

export const Option = styled(MenuItem)`
  font-family: Inter, sans-serif;
  color: #262633;
  font-size: 1rem;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
`;
export const PlaceholderStyle = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgb(133, 136, 158);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
  img {
    padding-left: 2rem;
  }
`;

export const HelperText = styled.span`
  color: #85889e;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  padding-bottom: 8px;
`;
