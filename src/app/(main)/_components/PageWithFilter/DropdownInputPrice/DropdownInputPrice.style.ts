import styled from '@emotion/styled';
import { MenuItem, Select } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledSelect = styled(Select)`
  border-radius: 1rem;
  height: 3rem;
  padding-right: 1rem;
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
        border: 0.13rem solid rgba(180, 184, 204, 0.36);
      }
    }
  }
  & {
    &.MuiOutlinedInput-root {
      & fieldset {
        border: 0.13rem solid rgba(180, 184, 204, 0.36);
      }
    }
  }
  & fieldset {
    border: 0.13rem solid rgba(180, 184, 204, 0.36);

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
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
`;
