import SingleDropdownInput from '@/app/components/ui/SingleDropdownInput/SingleDropdownInput';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const DropDownsContainer = styled.div`
  display: flex;
  gap: 0.375rem;
  width: 100%;
  align-items: end;
`;

export const StyledDropdownInput = styled(SingleDropdownInput)`
  & {
    &.MuiOutlinedInput-root {
      & fieldset {
        border: 4.13rem solid rgba(180, 184, 204, 0.36);
      }
    }
  }
`;
