import { Controller } from 'react-hook-form';
import { FormControl } from '@mui/material';
import Image from 'next/image';
import * as SC from './DropdownInput.style';
import { FC } from 'react';
import { DropdownInputProps } from '@/app/components/ui/DropdownInput/DropDownInput.type';

const DropdownInput: FC<DropdownInputProps> = ({
  name,
  placeholder,
  list,
  control,
  defaultValue,
  helperText,
  isRequired = false,
  click,
}) => {
  const ICON_SIZE = 24;
  const ArrowDownIcon = () => <Image src='/images/arrow-down.svg' alt='arrow down' width={1} height={1} />;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ? defaultValue : null}
      rules={{ required: isRequired }}
      render={({ field: { onChange, value } }) => {
        const selectedValues = Array.isArray(value) ? value : [];

        return (
          <SC.Container>
            <FormControl fullWidth>
              {helperText && <SC.HelperText>{helperText}</SC.HelperText>}
              <SC.StyledSelect
                displayEmpty
                renderValue={() => {
                  if (selectedValues.length === 0) {
                    return (
                      <SC.PlaceholderStyle>
                        {placeholder}
                        <Image src='/images/arrow-down.svg' alt='arrow down' width={ICON_SIZE} height={ICON_SIZE} />
                      </SC.PlaceholderStyle>
                    );
                  }
                  return selectedValues.join(', ');
                }}
                value={selectedValues}
                onChange={onChange}
                IconComponent={ArrowDownIcon}
              >
                {list?.map((item) => (
                  <SC.Option key={item} disableRipple value={item} onClick={() => (click ? click(item) : () => {})}>
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

export default DropdownInput;
