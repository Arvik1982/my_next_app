import styled from '@emotion/styled';

export const PaperContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: fit-content;
  box-shadow: none;
  border-radius: 1.5rem;
  padding: 1.5rem;
`;
export const Title = styled.p`
  color: rgb(38, 38, 51);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.75rem;
  letter-spacing: 0;
  text-align: left;
  margin: 0;
`;
export const Recommendations = styled.p`
  color: rgb(133, 136, 158);
  font-family: Inter, sans-serif;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
  margin: 0;
`;
export const ServicesContentDisabled = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  opacity: 0.5;
`;
export const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const ServicesContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const textContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Prompt = styled.p`
  color: rgb(133, 136, 158);
  font-family: Inter, sans-serif;
  font-size: 0.81rem;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: 0;
  text-align: left;
  margin: 0;
`;
export const Accounts = styled.div`
  color: rgb(38, 38, 51);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
  display: flex;
  gap: 0.5rem;
`;
export const Start = styled.span`
  color: rgb(38, 38, 51);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
`;
export const ButtonText = styled.span`
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: center;
  text-transform: lowercase;
  &:first-letter {
    text-transform: uppercase;
  }
`;
export const ButtonGroup = styled.div`
  display: flex;
  gap: 6px;
  border-radius: 1.5rem;
  background: rgb(247, 248, 250);
  padding: 0.38rem;
  button {
    padding: 0.88rem 1.25rem 0.88rem 1.25rem;
  }
`;
export const ButtonBlock = styled.div`
  button {
    padding: 1.13rem 1.5rem 1.13rem 1.5rem;
  }
`;
export const WhiteButton = styled.div`
  margin-top: 0.5rem;
  button {
    padding: 1.13rem 1.5rem 1.13rem 1.5rem;
    background-color: inherit;
    &:hover {
      background-color: inherit;
    }
  }
`;

export const PromptWrapper = styled.div`
  position: relative;
`;
export const PromptSecurity = styled.div`
  position: absolute;
  left: -0.5rem;
  width: 18rem;
  z-index: 1500;
  padding: 0.5rem;
  box-sizing: border-box;
  border: 0.06rem solid rgba(180, 184, 204, 0.36);
  border-radius: 0.75rem;
  box-shadow: 0 0.25rem 0.75rem 0 rgba(43, 44, 52, 0.1);
  background: rgb(247, 248, 250);
  font-family: Inter, sans-serif;
  font-size: 0.81rem;
  font-weight: 400;
  line-height: 1.13rem;
  letter-spacing: 0;
  text-align: left;
  color: rgb(133, 136, 158);
  a {
    text-decoration: none;
  }
`;

export const Error = styled.div`
  color: rgb(255, 51, 51);
  font-family: Inter;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0rem;
  text-align: left;
`;
