import styled from '@emotion/styled';

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  flex: none;
  order: 1;
  flex-grow: 0;
  border-radius: 1rem;
  background: rgba(180, 184, 204, 0.12);
`;

export const Title = styled.h4`
  margin: 0;
  color: rgb(38, 38, 51);
  font-family: Manrope;
  font-size: 1.13rem;
  font-weight: 700;
  line-height: 1.38rem;
  letter-spacing: 0rem;
  text-align: left;
  margin-bottom: 0.6rem;
`;

export const Text = styled.p`
  margin: 0;
  color: #85889e;
  font-family: Inter;
  font-size: 0.88rem;
  font-weight: 500;
  line-height: 1.13rem;
  letter-spacing: 0rem;
  text-align: left;
  margin-bottom: 1rem;
`;

export const Email = styled.span`
  color: #262633;
  font-family: Inter;
  font-size: 0.88rem;
  font-weight: 500;
  line-height: 1.13rem;
  letter-spacing: 0rem;
`;

export const ButtonBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Resend = styled.div`
  color: rgb(85, 51, 255);
  font-family: Inter;
  font-size: 0.88rem;
  font-weight: 500;
  line-height: 1.13rem;
  letter-spacing: 0rem;
  text-align: left;
  cursor: pointer;
`;
export const Cancel = styled.div`
  color: rgb(255, 51, 51);
  font-family: Inter;
  font-size: 0.88rem;
  font-weight: 500;
  line-height: 1.13rem;
  letter-spacing: 0rem;
  text-align: left;
  cursor: pointer;
`;
