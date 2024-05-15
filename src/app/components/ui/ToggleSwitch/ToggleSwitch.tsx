'use client';

import React from 'react';
import { Control, Controller, FieldValues, Path, PathValue } from 'react-hook-form';

import * as SC from './ToggleSwitch.style';

export interface Props<T extends FieldValues, U extends Path<T>> {
  label?: string;
  name: U;
  control: Control<T>;
  checked?: PathValue<T, U>;
  onClickSwitch: (v: string) => void;
}

const ToggleSwitch = <T extends FieldValues, U extends Path<T>>({
  label,
  name,
  control,
  checked,
  onClickSwitch,
}: Props<T, U>) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={checked}
      render={({ field: { onChange } }) => (
        <SC.StyledFormControlLabel
          control={<SC.StyledSwitch sx={{ m: 1 }} />}
          label={label}
          checked={checked}
          onChange={(e) => {
            onClickSwitch(name);
            onChange(e);
          }}
        />
      )}
    />
  );
};

export default ToggleSwitch;
