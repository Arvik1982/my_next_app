'use client';
import { FC, MouseEvent, useEffect, useState } from 'react';
import * as SC from './SpecializationEdit.style';
import { InputAdornment } from '@mui/material';
import { Input, SingleDropdownInput, SplitMiniButtonGroup } from '@/app/components';
import Image from 'next/image';
import FieldOfWorkInput from '../FieldOfWorkInput/FieldOfWorkInput';
import { SpecializationEditProps } from './SpecializationEditTypes';
import { useTranslation } from 'react-i18next';
import { useFieldArray } from 'react-hook-form';
import { useAppDispatch } from '@/lib/storeHooks';
import { removeSpecializationId } from '@/lib/store/profileSlice/profileSlice';

const selectData = {
  status: ['Ищу работу', 'Не ищу работу', 'Рассматриваю предложения'],
  grade: ['Стажер (Intern)', 'Младший (Junior)', 'Средний (Middle)', 'Старший (Senior)', 'Ведущий (Lead)'],
};

const SpecializationEdit: FC<SpecializationEditProps> = ({ control, watch }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const ICON_SIZE = 24;
  const RUS = 'Рус';
  const CN = '中文';
  const ENG = 'Eng';
  const textAboutYourself = watch('aboutYourself');
  const MAX_LENGTH = 60;

  const [charLeft, setCharLeft] = useState(MAX_LENGTH);

  const { fields, remove, append } = useFieldArray({
    name: 'specializations',
    control,
  });

  useEffect(() => {
    const textLength = textAboutYourself.length;
    if (textLength === undefined) {
      setCharLeft(MAX_LENGTH);
      return;
    }
    setCharLeft(MAX_LENGTH - textLength);
  }, [textAboutYourself]);

  const addWorkInputs = (e: MouseEvent<HTMLButtonElement>) => {
    append({
      name: '',
      direction: {
        name: '',
      },
    });

    e.preventDefault();
  };
  const onClickLanguage = () => {};

  const removeInput = (e: MouseEvent<HTMLButtonElement>, index: number) => {
    dispatch(removeSpecializationId(index));
    remove(index);
    e.preventDefault();
  };

  return (
    <SC.Wrapper>
      <SC.Title>{t('edit.specializationTitle')}</SC.Title>
      <SC.Text>
        {t('edit.textBefore')}
        <span>{t('edit.textUnderLine')}</span>
        {t('edit.textAfter')}
      </SC.Text>
      <SC.FormElement>
        <SC.TitleInput>{t('edit.readyToWork')}</SC.TitleInput>
        <SingleDropdownInput
          list={selectData.status}
          name={'status'}
          control={control}
          placeholder={t('edit.selectReadyToWork')}
        />
      </SC.FormElement>
      {fields.map((field, index) => {
        return (
          <FieldOfWorkInput key={field.id} control={control} removeInput={removeInput} index={index} watch={watch} />
        );
      })}
      {fields.length < 2 && (
        <SC.ButtonBlock onClick={addWorkInputs}>
          <InputAdornment position='start'>
            <Image src='/images/plusBlack.svg' alt='plus icon' height={ICON_SIZE} width={ICON_SIZE} />
          </InputAdornment>
          <SC.Button>{t('edit.addFieldOfWorkInput')}</SC.Button>
        </SC.ButtonBlock>
      )}
      <SC.FormElement>
        <SC.TitleInput>{t('edit.level')}</SC.TitleInput>
        <SingleDropdownInput
          list={selectData.grade}
          name={'grade'}
          control={control}
          placeholder={t('edit.selectLevel')}
        />
      </SC.FormElement>
      <SC.FormElement>
        <SC.TitleInput>{t('edit.skills')}</SC.TitleInput>
        <SC.InputBlock>
          <Input type={'text'} name={'skills'} control={control} placeholder={t('edit.enterSkills')} />
          <SC.ImgBlock>
            <Image src='/images/search.svg' alt='search icon' height={ICON_SIZE} width={ICON_SIZE} />
          </SC.ImgBlock>
        </SC.InputBlock>
      </SC.FormElement>
      <SC.FormElement>
        <SC.TitleInput>{t('edit.aboutYourself')}</SC.TitleInput>
        <SplitMiniButtonGroup nameButton={[RUS, CN, ENG]} activeButton={RUS} onClickButton={onClickLanguage} />
        <Input
          type={'text'}
          name={'aboutYourself'}
          control={control}
          placeholder={t('edit.tellAboutYourself')}
          multiline
          rows={4}
          maxLength={MAX_LENGTH}
        />
        <SC.SymbolText>{t('edit.textLeft', { charLeft: charLeft })}</SC.SymbolText>
      </SC.FormElement>
    </SC.Wrapper>
  );
};

export default SpecializationEdit;
