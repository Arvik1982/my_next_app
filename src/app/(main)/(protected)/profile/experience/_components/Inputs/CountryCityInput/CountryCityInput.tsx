import { FC } from 'react';
import { SingleDropdownInput } from '@/app/components';
import * as SC from './CountryCityInput.style';
import { CompanyInfoInputs } from '../../CompanyInfoInputs.type';

const countries = ['Россия', 'Америка', 'Китай'];
const cities = ['Москва', 'Нью-Йорк', 'Пекин'];

export const CountryCityInput: FC<CompanyInfoInputs> = ({ control }) => {
  return (
    <SC.Container>
      <SingleDropdownInput
        name={'country'}
        helperText='Страна'
        placeholder='Выберите страну'
        control={control}
        list={countries}
      />
      <SingleDropdownInput
        name={'city'}
        helperText='Город'
        placeholder='Выберите город'
        control={control}
        list={cities}
      />
    </SC.Container>
  );
};
