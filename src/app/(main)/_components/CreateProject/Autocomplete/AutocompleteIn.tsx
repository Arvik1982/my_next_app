'use client';
import { Autocomplete, AutocompleteInputChangeReason } from '@mui/material';
import { AutocompleteProps } from './AutocompleteIn.type';
import { FC, useState, ChangeEvent, MouseEvent } from 'react';
import * as SC from './AutocompleteIn.style';
import Image from 'next/image';
import { ISpecialists } from '@/lib/store/types';
import { Avatar } from '@/app/components';

const AutocompleteIn: FC<AutocompleteProps> = ({
  authors,
  specialists,
  goToPage,
  addAuthor,
  label,
  deleteAuthor,
  placeholder,
}) => {
  const [active, setActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const ICON_SIZE = 16;
  const ICON_SEARCH = 24;
  const AVATAR_SIZE = 24;
  const TRANSLATION_ICON = 12;

  const onclickHandler = () => {
    setActive(true);
  };
  const onBlurHandler = () => {
    setActive(false);
  };
  const handleGoToPage = (event: MouseEvent<HTMLElement>, id: string) => {
    event.stopPropagation();
    goToPage(id);
  };
  const handleInputChange = (
    event: ChangeEvent<NonNullable<unknown>>,
    value: string,
    reason: AutocompleteInputChangeReason,
  ) => {
    setInputValue(value);
  };
  const handleAutocompleteChange = (event: ChangeEvent<NonNullable<unknown>>, author: ISpecialists | null) => {
    setInputValue('');
    if (author) {
      addAuthor(author);
    }
  };
  return (
    <>
      <SC.Label>{label}</SC.Label>
      <Autocomplete
        getOptionDisabled={(option) => authors.map((item) => item.uid).includes(option.uid)}
        id='custom-input-demo'
        options={specialists || []}
        onBlur={onBlurHandler}
        onChange={handleAutocompleteChange}
        value={null}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        renderInput={(params) => (
          <SC.InputContainer active={active} ref={params.InputProps.ref}>
            <SC.IconSearch src='/images/search.svg' alt='search' width={ICON_SEARCH} height={ICON_SEARCH} />
            <SC.StyledAutocompleteRoot
              type='text'
              placeholder={placeholder}
              onClick={onclickHandler}
              {...params.inputProps}
            ></SC.StyledAutocompleteRoot>
          </SC.InputContainer>
        )}
        renderOption={(props, option) => (
          <SC.OptionContainer {...props}>
            <SC.AvatarContainer>
              <Avatar size={AVATAR_SIZE} specialist={option} />
            </SC.AvatarContainer>
            <SC.TextWrapper>
              <SC.NameAuthor>{option.first_name + ' ' + option.second_name}</SC.NameAuthor>
              <SC.Nick>{option.username || 'nick'}</SC.Nick>
            </SC.TextWrapper>
            <SC.AboutUserWrapper>
              <SC.AboutUser
                id='contactSpan'
                className={'aboutUser'}
                onClick={(event) => handleGoToPage(event, option.uid)}
              >
                о пользователе
              </SC.AboutUser>
              <Image
                className={'translation'}
                src={'/images/translation.svg'}
                alt={'translation'}
                height={TRANSLATION_ICON}
                width={TRANSLATION_ICON}
              />
            </SC.AboutUserWrapper>
          </SC.OptionContainer>
        )}
      />
      {
        <SC.FiltersContainer>
          {authors.map((author) => {
            return (
              <SC.Filters key={author.uid}>
                <SC.AvatarContainer>
                  <Avatar size={AVATAR_SIZE} specialist={author} />
                </SC.AvatarContainer>
                {author.first_name + ' ' + author.second_name}
                {
                  <SC.Exit
                    src={'/images/exit.svg'}
                    alt={'exit'}
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                    onClick={() => deleteAuthor(author)}
                  />
                }
              </SC.Filters>
            );
          })}
        </SC.FiltersContainer>
      }
    </>
  );
};

export default AutocompleteIn;
