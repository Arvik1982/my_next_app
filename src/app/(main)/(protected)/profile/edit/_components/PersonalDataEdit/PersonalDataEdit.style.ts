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
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
  color: rgb(38, 38, 51);
`;

export const TitleInput = styled.div`
  color: rgb(133, 136, 158);
  font-family: Inter;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
`;

export const InputBlock = styled.div`
  input {
    padding-left: 13rem !important;
    padding-right: 2.5rem !important;
  }
`;

export const PrefixInputField = styled.div`
  position: absolute;
  top: 2.61rem;
  left: 1rem;
  font-family: 'Inter', sans-serif;
  line-height: 20px;
  color: #85889e;
  pointer-events: none;
`;

export const CopyButton = styled.button`
  position: absolute;
  top: 2.3rem;
  right: 0.7rem;
  width: 30px;
  height: 30px;
  background-color: inherit;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
