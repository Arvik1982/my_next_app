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
  margin-bottom: 0.5rem;
`;

export const Text = styled.div`
  color: rgb(133, 136, 158);
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  margin-bottom: 1.5rem;
  span {
    text-decoration: underline;
  }
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

export const BasketButton = styled.button`
  position: absolute;
  top: 35px;
  width: 30px;
  height: 30px;
  background-color: inherit;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonBlock = styled.button`
  height: 2.75rem;
  display: flex;
  flex-direction: row;
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

export const InputBlock = styled.div`
  input {
    padding-left: 3rem !important;
  }
`;

export const ImgBlock = styled.div`
  position: absolute;
  top: 2.3rem;
  left: 0.7rem;
  width: 30px;
  height: 30px;
  background-color: inherit;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SymbolText = styled.div`
  color: rgb(133, 136, 158);
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: right;
`;
