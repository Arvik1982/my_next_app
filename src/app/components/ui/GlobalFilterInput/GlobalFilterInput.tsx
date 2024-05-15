'use client';
import { ChangeEvent, FC, useState } from 'react';
import { GlobalFilterInputProps } from './GlobalFilterInput.type';
import * as SC from './GlobalFilterInput.style';
import { InitialCompaniesState } from '@/lib/store/filterCompaniesSlice/companiesSlice';
import { ISpecialists } from '@/lib/store/types';

const GlobalFilterInput: FC<GlobalFilterInputProps> = ({ list, onClick, placeholder, onChange }) => {
  const [inputValue, setInputValue] = useState('');
  const [active, setActive] = useState(false);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange?.(value);
    setInputValue(value);

    const filtered: (InitialCompaniesState | ISpecialists)[] = list.filter((object) => {
      // if ('userName' in object) {
      //   const nameMatch = object.userName.toLowerCase().includes(value.toLowerCase());
      //   const postMatch = object.post.toLowerCase().includes(value.toLowerCase());
      //   return nameMatch || postMatch;
      // } else {
      //   return object.companyName.toLowerCase().includes(value.toLowerCase());
      // }
    });

    if (value.length !== 0) {
      onClick(filtered);
    } else {
      onClick(list);
    }
  };

  return (
    <SC.InputContainer onClick={() => setActive(true)} onBlur={() => setActive(false)} active={active}>
      <SC.IconSearch src={'/images/search.svg'} alt={'search'} width={24} height={24} />
      <SC.StyledAutocompleteRoot
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </SC.InputContainer>
  );
};

export default GlobalFilterInput;
