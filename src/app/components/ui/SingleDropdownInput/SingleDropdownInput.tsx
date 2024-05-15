import { Controller, FieldValues, Path } from 'react-hook-form';
import { FormControl } from '@mui/material';
import Image from 'next/image';
import * as SC from './SingleDropdownInput.style';
import { SingleDropdownInputProps } from './SingleDropdownInput.type';

const SingleDropdownInput = <T extends FieldValues, U extends Path<T>>({
  name,
  placeholder,
  list,
  control,
  defaultValue,
  helperText,
}: SingleDropdownInputProps<T, U>) => {
  const ICON_SIZE = 24;
  const ArrowDownIcon = () => (
    <Image src='/images/arrow-down.svg' alt='arrow down' width={ICON_SIZE} height={ICON_SIZE} />
  );
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => {
        return (
          <SC.Container>
            {helperText && <SC.HelperText>{helperText}</SC.HelperText>}
            <FormControl fullWidth>
              <SC.StyledSelect
                displayEmpty
                defaultValue={defaultValue}
                renderValue={() => (value ? value : <SC.PlaceholderStyle>{placeholder}</SC.PlaceholderStyle>)}
                value={value || ''}
                onChange={onChange}
                IconComponent={ArrowDownIcon}
              >
                {list?.map((item) => (
                  <SC.Option key={item} disableRipple value={item}>
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

export default SingleDropdownInput;
