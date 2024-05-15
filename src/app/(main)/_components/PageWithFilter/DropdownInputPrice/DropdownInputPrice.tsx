'use client';
import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import * as SC from './DropdownInputPrice.style';
import { FormControl } from '@mui/material';
import Image from 'next/image';
import { DropdownInputPriceProps } from '@/app/(main)/_components/PageWithFilter/DropdownInputPrice/DropdownInputPrice.type';

const DropdownInputPrice: FC<DropdownInputPriceProps> = ({ name, control, click }) => {
  const price = ['₽', '$', '€', '¥'];
  const ICON_SIZE = 24;
  const ArrowDownIcon = () => (
    <Image src='/images/arrow-down.svg' alt='arrow down' width={ICON_SIZE} height={ICON_SIZE} />
  );

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={''}
      render={({ field: { onChange, value } }) => {
        return (
          <SC.Container>
            <FormControl fullWidth>
              <SC.StyledSelect
                placeholder={'₽'}
                value={value || '₽'}
                displayEmpty
                onChange={onChange}
                IconComponent={ArrowDownIcon}
              >
                {price?.map((item) => (
                  <SC.Option key={item} disableRipple value={item} onClick={() => click(item)}>
                    {item}
                  </SC.Option>
                ))}
              </SC.StyledSelect>
            </FormControl>
          </SC.Container>
        );
      }}
    />
  );
};

export default DropdownInputPrice;
