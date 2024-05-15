import { FC } from 'react';
import { Grid } from '@mui/material';
import * as SC from './FieldOfWorkInput.style';
import { SingleDropdownInput } from '@/app/components';
import Image from 'next/image';
import { FieldOfWorkInputProps } from './FieldOfWorkInputTypes';
import { useTranslation } from 'react-i18next';

const selectData = {
  direction: ['Дизайн', 'Мода', 'Маркетинг', 'Любое направление'],
  specialization: [
    'UX/UI-дизайн',
    'Web дизайн',
    'Графический дизайнер',
    'Промышленный дизайн',
    'Продуктовый дизайн',
    'Любая специализация',
  ],
};

const FieldOfWorkInput: FC<FieldOfWorkInputProps> = ({ control, removeInput, index }) => {
  const { t } = useTranslation();
  const ICON_SIZE = 24;

  return (
    <Grid container>
      <Grid item xs={4.6} marginRight={1}>
        <SC.FormElement>
          <SC.TitleInput>{t('mentoring.direction')}</SC.TitleInput>
          <SingleDropdownInput
            list={selectData.direction}
            name={`specialization.${index}.direction`}
            control={control}
            placeholder={t('mentoring.selectDirection')}
          />
        </SC.FormElement>
      </Grid>
      <Grid item xs={6.7}>
        <SC.FormElement>
          <SC.TitleInput>{t('mentoring.specialization')}</SC.TitleInput>
          <SingleDropdownInput
            list={selectData.specialization}
            name={`specialization.${index}.specialization`}
            control={control}
            placeholder={t('mentoring.selectSpecialization')}
          />
        </SC.FormElement>
      </Grid>
      <Grid item xs={0.1} position={'relative'}>
        <SC.BasketButton onClick={() => removeInput(index)}>
          <Image src='/images/basket.svg' alt='basket icon' height={ICON_SIZE} width={ICON_SIZE} />
        </SC.BasketButton>
      </Grid>
    </Grid>
  );
};

export default FieldOfWorkInput;
