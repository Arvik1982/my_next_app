'use client';
import React, { useState } from 'react';
import * as SC from './MentoringTab.style';
import OptionBlock from '../_components/OptionBlock/OptionBlock';
import { FieldValues, useForm } from 'react-hook-form';
import SpecializationDropdowns from '../SpecializationDropdowns/SpecializationDropdowns';
import GraySpansGroup from '../_components/GraySpansGroup/GraySpansGroup';
import InputWithLocalization from '../InputWithLocalization/InputWithLocalization';
import Image from 'next/image';
import { InputAdornment } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SubmitSplitButtons } from '../../edit/_components/SubmitSplitButtons/SubmitSplitButtons';
import { MentoringPayment } from '../_components/MentoringPayment/MentoringPayment';
import { SnackbarAlert } from '@/app/components';
import { MentoringFormValues } from './MentoringTypes';

const levels = ['Стажер', 'Младший', 'Средний', 'Старший', 'Ведущий'];
const skills = ['Research', 'HTML5', 'CSS3', 'Figma', 'Material Design', 'UI', 'UX'];
const directions = ['Дизайн', 'Мода', 'Маркетинг', 'Любое направление'];
const requests = [
  'Начало карьеры или смена профессии',
  'Развитие навыков',
  'Карьерный рост',
  'Оценка',
  'Помощь с задачей',
  'Поддержка и коучинг',
  'Карьера за рубежом',
];

const MentoringTab = () => {
  const { t } = useTranslation();
  const { watch, control, handleSubmit } = useForm<MentoringFormValues & FieldValues>();
  const ICON_SIZE = 24;
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const desctiption = (
    <>
      {t('mentoring.textBefore')}
      <SC.Underline>{t('mentoring.textUnderLine')}</SC.Underline>
      {t('mentoring.textAfter')}
    </>
  );

  const onSubmit = handleSubmit(() => {
    setSnackbarOpen(true);
    setSnackbarMessage(t('snackbar.updateUser'));
  });

  return (
    <SC.FormWrapper onSubmit={onSubmit}>
      <OptionBlock title={t('mentoring.title')} description={t('mentoring.enterQualification')}>
        <GraySpansGroup list={levels} control={control} name={'level'} />
      </OptionBlock>
      <OptionBlock title={t('mentoring.specializationTitle')} description={desctiption}>
        <SpecializationDropdowns control={control} directions={directions} />
      </OptionBlock>
      <OptionBlock title={t('mentoring.requests')} description={t('mentoring.enterRequests')}>
        <GraySpansGroup list={requests} control={control} name={'requests'} />
      </OptionBlock>
      <OptionBlock title={t('mentoring.skillsTitle')}>
        <SC.Search
          placeholder={t('mentoring.enterSkills')}
          startAdornment={
            <InputAdornment position='start'>
              <Image src='/images/search.svg' alt='search icon' height={ICON_SIZE} width={ICON_SIZE} />
            </InputAdornment>
          }
        />
        <GraySpansGroup list={skills} control={control} name={'skills'} />
      </OptionBlock>
      <OptionBlock title={t('mentoring.expertnessTitle')} description={t('mentoring.expertnessSubtitle')}>
        <InputWithLocalization
          watch={watch}
          type={'text'}
          control={control}
          name='aboutYourself'
          placeholder={t('mentoring.aboutYourself')}
        />
      </OptionBlock>
      <OptionBlock title={t('mentoring.payment')}>
        <MentoringPayment control={control} />
      </OptionBlock>
      <SubmitSplitButtons />
      <SnackbarAlert onClose={handleSnackbarClose} open={snackbarOpen} message={snackbarMessage} />
    </SC.FormWrapper>
  );
};

export default MentoringTab;
