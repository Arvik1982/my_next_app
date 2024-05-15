import { FC, useState } from 'react';
import { Controller } from 'react-hook-form';
import * as SC from './TextFieldPrice.style';
import { TextFieldPriceProps } from '@/app/(main)/_components/PageWithFilter/TextFieldPrice/TextFieldPrice.type';

const TextFieldPrice: FC<TextFieldPriceProps> = ({ name, control, currency, text, type, onChangePrice }) => {
  const [active, setActive] = useState(false);

  const onClickHandler = () => {
    setActive(true);
  };

  const onBlurHandler = () => {
    setActive(false);
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={''}
      render={({ field: { onChange, value } }) => (
        <SC.OutlinedInputContainer
          onChange={(e) => {
            onChange(e);
            onChangePrice(e.currentTarget.value);
          }}
          onClick={onClickHandler}
          onBlur={onBlurHandler}
          type={type}
          value={value}
          placeholder={'1000'}
          active={active}
          id='outlined-adornment-weight'
          startAdornment={<SC.Adornment position='start'>{text}</SC.Adornment>}
          endAdornment={<SC.Adornment position='end'>{currency || '₽'}</SC.Adornment>}
        />
      )}
    />
  );
};

export default TextFieldPrice;
