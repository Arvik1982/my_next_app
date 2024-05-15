'use client';

import * as SC from '../AuthenticationServiceGlobal.style';

import Image from 'next/image';
import React, { FC } from 'react';
import { PropsServices } from './Services.type';
import { ToggleSwitch } from '@/app/components';
import { useForm } from 'react-hook-form';

const Services: FC<PropsServices> = ({ onClickSwitch, checked, icon, nameService, recommendations }) => {
  const ICON_SIZE = 44;
  const { control } = useForm();
  return (
    <SC.ServicesContainer>
      <SC.ServicesContent>
        <Image src={icon} alt={'icon service'} width={ICON_SIZE} height={ICON_SIZE} />
        <SC.textContent>
          <SC.Accounts>{nameService}</SC.Accounts>
          <SC.Prompt>{recommendations} </SC.Prompt>
        </SC.textContent>
      </SC.ServicesContent>
      <ToggleSwitch control={control} name={nameService} checked={checked} onClickSwitch={onClickSwitch} />
    </SC.ServicesContainer>
  );
};

export default Services;
