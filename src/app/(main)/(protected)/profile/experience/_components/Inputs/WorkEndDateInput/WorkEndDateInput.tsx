import { FC } from 'react';
import * as SC from './WorkEndDateInput.style';
import { CompanyInfoInputs } from '../../CompanyInfoInputs.type';
import { WorkEndDateProps } from './WorkEndDate.type';

const months = [
  'По настоящее время',
  'Янв',
  'Фев',
  'Мар',
  'Апр',
  'Май',
  'Июн',
  'Июл',
  'Авг',
  'Сен',
  'Окт',
  'Ноя',
  'Дек',
];

const CreateYearsList = () => {
  const currentYear = new Date().getFullYear();
  const years: string[] = [];
  for (let i = currentYear; i > 2000; i--) years.push(i.toString());
  return years;
};

const years: string[] = CreateYearsList();

export const WorkEndDateInput: FC<CompanyInfoInputs & WorkEndDateProps> = ({ watch, control }) => {
  return (
    <SC.Container>
      {!watch('endMonth') || watch('endMonth').includes(months[0]) ? (
        <SC.StyledDropdownInput
          name='endMonth'
          helperText='Окончание'
          defaultValue={months[0]}
          control={control}
          list={months}
        />
      ) : (
        <SC.DropDownsContainer>
          <SC.StyledDropdownInput
            name={'endMonth'}
            helperText='Окончание'
            placeholder='Месяц'
            control={control}
            list={months}
          />
          <SC.StyledDropdownInput
            name={'endYear'}
            placeholder='Год'
            defaultValue={years[0]}
            control={control}
            list={years}
          />
        </SC.DropDownsContainer>
      )}
    </SC.Container>
  );
};
