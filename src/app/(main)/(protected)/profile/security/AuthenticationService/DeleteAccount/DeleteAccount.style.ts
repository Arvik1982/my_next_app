import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 1.5rem;
  background-color: #ffffff;
  max-width: 32rem;
  width: 100%;
`;
export const Text = styled.p`
  margin: 0;
  color: rgb(133, 136, 158);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
`;
export const NetworkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const LabelEmail = styled.p`
  color: rgb(38, 38, 51);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
  margin: 0;
`;
export const Email = styled.p`
  color: rgb(133, 136, 158);
  font-family: Inter, sans-serif;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.13rem;
  letter-spacing: 0;
  text-align: left;
  margin: 0;
`;

export const RadioGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > .MuiFormControlLabel-root {
    margin: 0;
  }
`;
export const TitleSocialNetwork = styled.p`
  color: rgb(38, 38, 51);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
  margin: 0;
`;
export const BpIcon = styled('span')`
  border-radius: 50%;
  border: 6px solid rgba(180, 184, 204, 0.18);
  width: 8px;
  height: 8px;
  background-color: rgb(255, 255, 255, 0.5);
  ,
'input:disabled ~ &': {
    box-shadow: none;
    background: rgb(213, 7, 7);
  }
`;
export const BpCheckedIcon = styled(BpIcon)`
  width: 8px;
  height: 8px;
  border: 6px solid rgb(85, 51, 255);
  background-color: rgb(255, 255, 255);
`;
export const Disablet = styled.div`
  opacity: 0.5;
`;
