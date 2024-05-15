import { FC, PropsWithChildren } from 'react';
import * as SC from './AddExperienceModal.style';
import { AddExperienceModalProps } from './AddExperienceModal.type';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { CountryCityInput } from '../Inputs/CountryCityInput/CountryCityInput';
import { WorkStartDateInput } from '../Inputs/WorkStartDateInput/WorkStartDateInput';
import { WorkEndDateInput } from '../Inputs/WorkEndDateInput/WorkEndDateInput';
import { Input } from '@/app/components';
import ExperienceSplitButtonGroup from '../ExperienceSplitButtonGroup/ExperienceSplitButtonGroup';

export const AddExperienceModal: FC<PropsWithChildren & AddExperienceModalProps> = ({ open, setOpen }) => {
  const { watch, control } = useForm();
  const ICON_SIZE = 24;
  const SAVE_CHANGES = 'Сохранить изменения';
  const CANCEL = 'Отменить';
  return (
    <SC.StyledModal open={open}>
      <SC.Container>
        <SC.ExitButton onClick={() => setOpen(false)}>
          <Image src='/images/exit.svg' width={ICON_SIZE} height={ICON_SIZE} alt={'exit'} />
        </SC.ExitButton>
        <SC.NewCompanyTitle>Новая компания</SC.NewCompanyTitle>
        <SC.InputContainer>
          <Input
            name={'companyName'}
            placeholder='Введите название компании'
            control={control}
            helperText='Название компании'
            type={'text'}
          />
        </SC.InputContainer>
        <CountryCityInput control={control} />
        <SC.InputContainer>
          <Input
            name='jobTitle'
            helperText='Должность'
            placeholder='Введите или выберите должность'
            control={control}
            type='text'
          />
        </SC.InputContainer>
        <SC.DatesInputContainer>
          <WorkStartDateInput control={control} />
          <WorkEndDateInput control={control} watch={watch} />
        </SC.DatesInputContainer>
        <ExperienceSplitButtonGroup
          nameButton={[SAVE_CHANGES, CANCEL]}
          activeButton={SAVE_CHANGES}
          onClickButton={(i) => i === CANCEL && setOpen(false)}
          watch={watch}
        />
      </SC.Container>
    </SC.StyledModal>
  );
};
