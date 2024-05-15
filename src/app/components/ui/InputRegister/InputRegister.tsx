import React from 'react';
import * as SC from './InputRegister.style';
import { InputRegisterProps } from '@/app/components/ui/InputRegister/InputRegister.type';
import Image from 'next/image';

const InputRegister: React.FC<InputRegisterProps> = ({ type, register, err }) => {
  const ICON_SIZE = 18;
  return (
    <SC.BoxContainer err={err as boolean}>
      <SC.CustomTextField {...register} id='outlined-basic' type={type} variant='outlined' />
      {err && (
        <SC.ImageBlock>
          <Image src='/images/errorPassword.svg' alt='error icon' height={ICON_SIZE} width={ICON_SIZE} />
        </SC.ImageBlock>
      )}
    </SC.BoxContainer>
  );
};
export default InputRegister;
