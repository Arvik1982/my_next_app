import { Control, Controller, FieldValues } from 'react-hook-form';

import * as SC from './FilterButtonsGroup.style';

export interface Props {
  label: string;
  name: string;
  control: Control<FieldValues>;
  list: string[];
  onClickOption: (e: string) => void;
}

const FilterButtonsGroup = ({ label, name, control, list, onClickOption }: Props) => {
  return (
    <SC.Container>
      <SC.Label>{label}</SC.Label>
      <SC.Wrapper>
        {list.map((option) => (
          <Controller
            name={name}
            control={control}
            defaultValue={''}
            key={option}
            render={({ field: { onChange, value } }) => (
              <SC.StyledButton
                value={value}
                onClick={() => {
                  onChange(option), onClickOption(option);
                }}
                active={value === option}
                disableRipple
              >
                {option}
              </SC.StyledButton>
            )}
          />
        ))}
      </SC.Wrapper>
    </SC.Container>
  );
};

export default FilterButtonsGroup;
