import * as SC from './InputPassword.style';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import * as React from 'react';
import { FC } from 'react';
import { TextFieldProps } from './InputPassword.type';
import Image from 'next/image';

const InputPassword: FC<TextFieldProps> = ({ register, error, errorText, label }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const ICON_SIZE = 20;

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <SC.Container>
      <SC.Label>{label}</SC.Label>
      <SC.CustomOutlinedInput
        error={error}
        id='outlined-adornment-password'
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position='end'>
            {error ? (
              <Image src={'/images/errorPassword.svg'} alt={'errorPassword'} width={ICON_SIZE} height={ICON_SIZE} />
            ) : (
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            )}
          </InputAdornment>
        }
        {...register}
      />
      {!!errorText && <SC.ErrorText>{errorText}</SC.ErrorText>}
    </SC.Container>
  );
};

export default InputPassword;
