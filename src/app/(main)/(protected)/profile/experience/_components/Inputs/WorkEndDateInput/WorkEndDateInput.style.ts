import SingleDropdownInput from '@/app/components/ui/SingleDropdownInput/SingleDropdownInput';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`;

export const DropDownsContainer = styled.div`
  display: flex;
  gap: 0.375rem;
  width: 100%;
  align-items: flex-end;
`;

export const StyledDropdownInput = styled(SingleDropdownInput)`
  & > div {
    padding-right: 0 !important;
  }
`;
