import styled from '@emotion/styled';
import Image from 'next/image';

export const Container = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 560px;
  border-radius: 24px;
  background-color: #fff;
  outline: none;
`;

export const CloseIcon = styled(Image)`
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
`;

export const StyledForm = styled.form`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const baseTextStyle = `
  margin: 0;
  font-family: 'Manrope';
  color: rgb(38, 38, 51);
  letter-spacing: 0px;
  text-align: left;
  font-weight: 700;
  text-align: left;
`;

export const Title = styled.h1`
  ${baseTextStyle}
  font-size: 24px;
  line-height: 28px;
`;

export const Subtitle = styled.h2`
  ${baseTextStyle}
  font-size: 20px;
  line-height: 24px;
`;

export const Stack = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 0.5rem));
  gap: 1rem;
`;

export const DatesWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`;
