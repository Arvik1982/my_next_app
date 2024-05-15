import { Controller, FieldValues, Path } from 'react-hook-form';
import { FormControl } from '@mui/material';
import Image from 'next/image';
import * as SC from './ObjectDropdownInput.style';
import { ObjectDropdownInputProps } from './ObjectDropdownInput.type';

const ObjectDropdownInput = <T extends FieldValues, U extends Path<T>>({
  name,
  placeholder,
  list,
  control,
  defaultValue,
  helperText,
  disabled,
}: ObjectDropdownInputProps<T, U>) => {
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
                disabled={disabled}
              >
                {list.map((item) => (
                  <SC.Option key={item.id} disableRipple value={item.name}>
                    {item.name}
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

export default ObjectDropdownInput;
