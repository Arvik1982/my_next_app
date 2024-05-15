import styled from '@emotion/styled';
import { Box, TextField } from '@mui/material';
import Image from 'next/image';
import { ActiveProps } from '@/app/(main)/_components/CreateProject/CreateProject.type';

export const BoxContainerInput = styled(Box)<ActiveProps>`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 16px;
  border: 1px solid ${(props) => (props.active ? 'rgb(42, 22, 202)' : 'rgba(180, 184, 204, 0.36)')};
  padding-left: 1rem;
`;

export const CustomTextField = styled(TextField)`
  width: 100%;
  border: none;

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
  }

  fieldset {
    border: none;
    border-radius: 16px;
  }
`;
export const Delete = styled(Image)`
  cursor: pointer;
`;
export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-top: 0.5rem;
`;
export const Filters = styled.span`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem 0.75rem;
  border-radius: 1.13rem;
  background: rgba(180, 184, 204, 0.12);
  color: rgb(38, 38, 51);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
`;
