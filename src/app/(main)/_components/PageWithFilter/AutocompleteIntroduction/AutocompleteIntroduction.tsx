import { Autocomplete } from '@mui/material';
import { Controller } from 'react-hook-form';
import { AutocompleteIntroductionProps } from '@/app/(main)/_components/PageWithFilter/AutocompleteIntroduction/AutocompleteIntroduction.type';
import { ChangeEvent, FC, useState } from 'react';
import * as SC from './AutocompleteIntroduction.style';

const AutocompleteIntroduction: FC<AutocompleteIntroductionProps> = ({
  list,
  control,
  onClick,
  label,
  options,
  deleteOption,
  name,
  placeholder,
}) => {
  const [active, setActive] = useState(false);
  const ICON_SIZE = 16;

  const onclickHandler = () => {
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
      render={({ field: { onChange, value } }) => {
        const handleAutocompleteChange = (event: ChangeEvent<NonNullable<unknown>>, newValue: string | null) => {
          onChange([...value, newValue]);
          if (newValue) onClick(newValue);
        };

        return (
          <>
            <SC.Label>{label}</SC.Label>
            <Autocomplete
              getOptionDisabled={(option) => options.includes(option)}
              id='custom-input-demo'
              options={(Array.isArray(list) && list) || []}
              onBlur={onBlurHandler}
              onChange={handleAutocompleteChange}
              renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                  <SC.StyledAutocompleteRoot
                    active={active}
                    type='text'
                    placeholder={`  ${placeholder}`}
                    onClick={onclickHandler}
                    {...params.inputProps}
                  />
                </div>
              )}
            />
            <SC.FiltersContainer>
              {options.map((i) => {
                return (
                  <SC.Filters key={i}>
                    {i}
                    <SC.Exit
                      src={'/images/exit.svg'}
                      alt={'exit'}
                      width={ICON_SIZE}
                      height={ICON_SIZE}
                      onClick={() => deleteOption(name, i)}
                    />
                  </SC.Filters>
                );
              })}
            </SC.FiltersContainer>
          </>
        );
      }}
    />
  );
};

export default AutocompleteIntroduction;
