import { FC } from 'react';
import * as SC from './WorkStartDateInput.style';
import { CompanyInfoInputs } from '../../CompanyInfoInputs.type';
import SingleDropdownInput from '@/app/components/ui/SingleDropdownInput/SingleDropdownInput';

const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

const CreateYearsList = () => {
  const currentYear = new Date().getFullYear();
  const years: string[] = [];

  for (let i = currentYear; i > 2000; i--) years.push(i.toString());
  return years;
};

export const WorkStartDateInput: FC<CompanyInfoInputs> = ({ control }) => {
  return (
    <SC.Container>
      <SC.DropDownsContainer>
        <SC.StyledDropdownInput
          name={'startMonth'}
          helperText='Начало работы'
          placeholder='Месяц'
          control={control}
          list={months}
        />
        <SingleDropdownInput name={'startYear'} placeholder='Год' control={control} list={CreateYearsList()} />
      </SC.DropDownsContainer>
    </SC.Container>
  );
};
