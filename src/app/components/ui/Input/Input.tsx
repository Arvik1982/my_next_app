import { HTMLInputTypeAttribute } from 'react';
import { Control, Controller, FieldValues, Path, PathValue } from 'react-hook-form';

import * as SC from './input.style';
import { Stack } from '@mui/material';

export interface Props<T extends FieldValues, U extends Path<T>> {
  name: U;
  control: Control<T>;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
  defaultValue?: PathValue<T, U>;
  multiline?: boolean;
  rows?: number;
  isRequired?: boolean;
  helperText?: string;
  maxLength?: number;
}

const Input = <T extends FieldValues, U extends Path<T>>({
  name,
  placeholder,
  helperText,
  defaultValue,
  type,
  control,
  isRequired = false,
  multiline = false,
  rows,
  maxLength,
}: Props<T, U>) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{ required: isRequired }}
      render={({ field: { onChange, value, onBlur } }) => (
        <Stack style={{ width: '100%' }}>
          {helperText && <SC.HelperText>{helperText}</SC.HelperText>}
          <SC.StyledTextField
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            type={type}
            onBlur={onBlur}
            fullWidth
            multiline={multiline}
            rows={rows}
            inputProps={{ maxLength }}
          />
        </Stack>
      )}
    />
  );
};

export default Input;
