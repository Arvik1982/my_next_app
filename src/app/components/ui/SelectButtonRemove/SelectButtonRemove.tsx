import { Control, Controller, FieldValues } from 'react-hook-form';

import * as SC from './RemoveSelectButton.style';
import Image from 'next/image';
import i from '../../../../../public/images/cross.svg';

export interface Props {
  name: string;
  control: Control<FieldValues>;
  option: string;
}

const SelectButtonRemove = ({ name, option, control }: Props) => {
  const ICON_SIZE = 10;
  const removeIcon = <Image src={i} alt='remove icon' width={ICON_SIZE} height={ICON_SIZE} />;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={''}
      render={({ field: { onChange, value } }) => (
        <SC.StyledButton key={option} value={value} onClick={() => onChange(option)} endIcon={removeIcon} disableRipple>
          {option}
        </SC.StyledButton>
      )}
    />
  );
};

export default SelectButtonRemove;
