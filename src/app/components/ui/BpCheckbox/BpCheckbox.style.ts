import styled from '@emotion/styled';

export const BpIcon = styled.span`
  border-radius: 0.38rem;
  width: 1.25rem;
  height: 1.25rem;
  background-color: rgba(180, 184, 204, 0.26);
`;

export const BpCheckedIcon = styled(BpIcon)`
    width: fit-content;
  background-color: rgb(85, 51, 255);
  background-image: linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0));
  &::before {
      display: block;
      width: 1.25rem;
      height: 1.25rem;
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E") ;  
      content: '""';
  }
  input:hover ~ & {
    background-color: rgb(34, 0, 204);
  },
`;
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const Label = styled.h2`
  color: rgb(38, 38, 51);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  text-align: left;
`;
