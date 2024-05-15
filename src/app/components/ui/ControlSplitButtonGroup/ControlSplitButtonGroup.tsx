'use client';
import { Controller, FieldValues, Path } from 'react-hook-form';
import * as SC from './ControlSplitButtonGroup.style';
import { ControlSplitBtnProps } from './ControlSplitButtonGroup.type';

const ControlSplitButtonGroup = <T extends FieldValues, U extends Path<T>>({
  name,
  control,
  list,
  defaultValue,
}: ControlSplitBtnProps<T, U>) => {
  return (
    <SC.MenuButton>
      {list.map((option) => (
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          key={option}
          render={({ field: { onChange, value } }) => (
            <SC.ButtonNavigation value={value} onClick={() => onChange(option)} active={value === option} disableRipple>
              <SC.ButtonName>{option}</SC.ButtonName>
            </SC.ButtonNavigation>
          )}
        />
      ))}
    </SC.MenuButton>
  );
};

export default ControlSplitButtonGroup;
