import React, { FC } from 'react';
import * as SC from './GraySpan.style';
import { GraySpanProps } from './GraySpan.type';

export const GraySpan: FC<GraySpanProps> = ({ text, value, active, onChange }) => {
  const handleOnClick = () => {
    active ? value.delete(text) : value.add(text);
    onChange(value);
  };
  return (
    <SC.GraySpan active={active} onClick={handleOnClick}>
      {text}
    </SC.GraySpan>
  );
};
