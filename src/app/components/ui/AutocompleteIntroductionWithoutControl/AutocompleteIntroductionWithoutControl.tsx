'use client';
import * as React from 'react';
import { FC } from 'react';
import { useAutocomplete, UseAutocompleteProps } from '@mui/base/useAutocomplete';
import { unstable_useForkRef as useForkRef } from '@mui/utils';
import * as SC from './AutocompleteIntroductionWithoutControl.style';
import ClearIcon from '@mui/icons-material/Clear';
import { Control, FieldValues } from 'react-hook-form';
import { AutocompleteIntroductionWithoutControlProps } from '@/app/components/ui/AutocompleteIntroductionWithoutControl/AutocompleteIntroductionWithoutControl.type';

const AutocompleteIntroductionWithoutControl: FC<AutocompleteIntroductionWithoutControlProps> = ({
  deleteOption,
  options,
  list,
  name,
  control,
  onClick,
  placeholder,
  label,
}) => {
  const Autocomplete = React.forwardRef<
    HTMLDivElement,
    UseAutocompleteProps<string, false, false, false> & { control: Control<FieldValues> }
  >(function Autocomplete(props, ref) {
    const { disableClearable = false, readOnly = false, ...other } = props;
    const ICON_SIZE = 16;
    const {
      getRootProps,
      getInputProps,
      getClearProps,
      getListboxProps,
      getOptionProps,
      dirty,
      id,
      popupOpen,
      focused,
      anchorEl,
      setAnchorEl,
      groupedOptions,
    } = useAutocomplete({
      ...props,
      componentName: 'BaseAutocompleteIntroduction',
    });
    const hasClearIcon = !disableClearable && dirty && !readOnly;
    const rootRef = useForkRef(ref, setAnchorEl);

    return (
      <>
        <SC.Label>{label}</SC.Label>
        <SC.StyledAutocompleteRoot {...getRootProps(other)} ref={rootRef} className={focused ? 'focused' : undefined}>
          <SC.StyledInput id={id} {...getInputProps()} placeholder={placeholder} />

          {hasClearIcon && (
            <SC.StyledClearIndicator {...getClearProps()}>
              <ClearIcon />
            </SC.StyledClearIndicator>
          )}
        </SC.StyledAutocompleteRoot>
        {anchorEl ? (
          <SC.StyledPopper open={popupOpen} anchorEl={anchorEl}>
            <SC.StyledListbox {...getListboxProps()}>
              {(groupedOptions as string[]).map((option, index) => {
                const optionProps = getOptionProps({ option, index });

                return (
                  <SC.StyledOption
                    key={index}
                    {...optionProps}
                    onClick={() => {
                      onClick(option);
                      setAnchorEl();
                    }}
                  >
                    {option}
                  </SC.StyledOption>
                );
              })}
              {groupedOptions.length === 0 && <SC.StyledNoOptions>No results</SC.StyledNoOptions>}
            </SC.StyledListbox>
          </SC.StyledPopper>
        ) : null}
        {!!options && (
          <SC.FiltersContainer>
            {options.map((i) => {
              return (
                <SC.Filters key={i}>
                  {i}
                  {
                    <SC.Exit
                      src={'/images/exit.svg'}
                      alt={'exit'}
                      width={ICON_SIZE}
                      height={ICON_SIZE}
                      onClick={() => deleteOption(name, i)}
                    />
                  }
                </SC.Filters>
              );
            })}
          </SC.FiltersContainer>
        )}
      </>
    );
  });

  return <Autocomplete options={list} control={control} />;
};

export default AutocompleteIntroductionWithoutControl;
