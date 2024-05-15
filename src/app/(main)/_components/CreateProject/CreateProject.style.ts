import { Box, Grid, TextField } from '@mui/material';
import styled from '@emotion/styled';
import Image from 'next/image';
import { ActiveProps } from '@/app/(main)/_components/CreateProject/CreateProject.type';

export const BoxContainer = styled(Box)`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  outline: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999999;
`;
export const GridContainer = styled(Grid)`
  width: 55.875rem;
  border-radius: 1.5rem;
  background: rgb(247, 248, 250);
  padding: 1.5rem;
`;
export const Exit = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  width: 2.75rem;
  height: 2.5rem;
  background: rgb(247, 248, 250);
  cursor: pointer;
`;
export const ExitIcon = styled(Image)`
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%);
`;
export const ButtonGroup = styled.div`
  display: flex;
  gap: 6px;
  border-radius: 1.5rem;
  background: rgb(247, 248, 250);
  padding: 0.38rem;
  height: 2.8rem;
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
export const Label = styled.h2`
  color: rgb(38, 38, 51);
  font-size: 1.13rem;
  font-weight: 700;
  line-height: 1.38rem;
  text-align: left;
  margin-bottom: 0.5rem;
  span {
    color: rgb(38, 38, 51);
    font-family: Inter, sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.25rem;
    letter-spacing: 0;
    text-align: left;
  }
`;
export const ContainerProjectCover = styled.div`
  position: relative;
`;
export const AboutProject = styled.div`
  position: absolute;
  bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const NameProject = styled.h3`
  color: rgb(255, 255, 255);
  font-size: 1.13rem;
  font-weight: 700;
  line-height: 1.38rem;
  letter-spacing: 0;
  text-align: left;
  margin: 0 0 0 1rem;
`;
export const Author = styled.h2`
  color: rgb(255, 255, 255);
  font-size: 0.81rem;
  font-weight: 400;
  line-height: 1.13rem;
  letter-spacing: 0;
  text-align: left;
  margin-left: 1rem;
`;
export const InputFile = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  margin: 15px 0;
  text-align: center;
`;
export const InputFileButtonText = styled.span`
  color: rgb(38, 38, 51);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: center;
  margin-left: 0.75rem;
`;
export const InputFileButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 21.25rem;
  width: 100%;
  height: 3.5rem;
  border-radius: 1.25rem;
  background: rgba(180, 184, 204, 0.18);
  color: #fff;
  font-size: 1.125rem;
  font-weight: 700;
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-align: center;
  -ms-flex-align: center;
  cursor: pointer;
  &:hover {
    background: rgba(180, 184, 204, 0.32);
  }
  &:active {
    background: rgba(180, 184, 204, 0.42);
  }
`;
export const InputFileIconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CustomTextField = styled(TextField)`
  width: 100%;

  div {
    border-radius: 16px;
    height: 42px;
    margin-top: 1px;
  }

  input {
    color: #262633;
    font-variant-numeric: lining-nums proportional-nums;
    padding: 12px 16px;
    border-radius: 16px;
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    border: none;
    ::placeholder {
      color: rgb(133, 136, 158);
    }
  }

  fieldset {
    border: none;
    border-radius: 16px;
  }
`;
export const BoxContainerInput = styled(Box)<ActiveProps>`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 16px;
  border: 1px solid ${(props) => (props.active ? 'rgb(42, 22, 202)' : 'rgba(180, 184, 204, 0.36)')};
  padding-left: 1rem;
`;
export const LinkContainer = styled.div`
  margin-bottom: 3rem;
`;
export const InputLabel = styled.span`
  color: rgb(133, 136, 158);
  font-family: Inter, sans-serif;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
`;
export const GridInput = styled(Grid)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
export const Icon = styled(Image)`
  cursor: pointer;
  margin-right: 1rem;
`;
