import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 1.5rem;

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
  margin-bottom: 1.5rem;
`;

export const FormElement = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
  color: rgb(38, 38, 51);
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

export const ButtonBlock = styled.button`
  height: 2.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.63rem 1.25rem 0.63rem 1rem;
  flex: none;
  order: 0;
  flex-grow: 0;
  border-radius: 1rem;
  border: none;
  margin-bottom: 20px;
  background: rgba(180, 184, 204, 0.26);
`;

export const Button = styled.span`
  color: rgb(38, 38, 51);
  font-family: Inter;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: center;
`;
