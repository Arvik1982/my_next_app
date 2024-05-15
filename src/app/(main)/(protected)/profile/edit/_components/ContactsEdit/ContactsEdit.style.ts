import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1.5rem 0 0 0;
  flex: none;
  order: 1;
  flex-grow: 1;
`;

export const Title = styled.div`
  color: rgb(38, 38, 51);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.75rem;
  letter-spacing: 0;
  text-align: left;
  margin-bottom: 20px;
`;

export const FormElement = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
`;

export const Label = styled.div`
  color: rgb(133, 136, 158);
  font-family: Inter;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
`;
export const PhoneBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const DropdownInputBlock = styled.div`
  min-width: 8rem;
`;
