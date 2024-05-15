import { FC, MouseEvent } from 'react';
import * as SC from './PersonalDataEdit.style';
import Image from 'next/image';
import { Grid } from '@mui/material';
import { Input, ControlSplitButtonGroup, SingleDropdownInput } from '@/app/components';
import { PersonalDataEditProps } from './PersonalDataEditTypes';
import { useTranslation } from 'react-i18next';
import { ProfileEditLanguageSelector } from '@/app/(main)/_components/LanguageSelector/LanguageSelector';

const selectData = {
  country: ['Россия', 'Армения', 'Грузия', 'Китай'],
  city: ['Москва', 'Санкт-Петербург', 'Новосибирск'],
  language: ['Русский', 'English', '中文'],
  gmt: ['Москва, Россия'],
};

const PersonalDataEdit: FC<PersonalDataEditProps> = ({ control, watch }) => {
  const { t } = useTranslation();
  const MALE = t('edit.male');
  const FEMALE = t('edit.female');
  const ICON_SIZE = 18;
  const LINK = 'https://creative.hub.com/';
  const userName = watch('link');

  const copyLink = (e: MouseEvent<HTMLButtonElement>) => {
    navigator.clipboard.writeText(LINK + userName);
    e.preventDefault();
  };

  return (
    <SC.Wrapper>
      <SC.Title>{t('edit.personalData')}</SC.Title>
      <SC.FormElement>
        <SC.TitleInput>{t('edit.profileLink')}</SC.TitleInput>
        <SC.InputBlock>
          <Input type={'text'} name={'link'} control={control} />
          <SC.PrefixInputField>{LINK}</SC.PrefixInputField>
          <SC.CopyButton onClick={copyLink}>
            <Image src='/images/copy.svg' alt='copy icon' height={ICON_SIZE} width={ICON_SIZE} />
          </SC.CopyButton>
        </SC.InputBlock>
      </SC.FormElement>

      <Grid container justifyContent={'space-between'}>
        <Grid item xs={5.8}>
          <SC.FormElement>
            <SC.TitleInput>{t('edit.firstName')}</SC.TitleInput>
            <Input type={'text'} name={'firstName'} control={control} placeholder={t('edit.enterFirstName')} />
          </SC.FormElement>
        </Grid>
        <Grid item xs={5.8}>
          <SC.FormElement>
            <SC.TitleInput>{t('edit.lastName')}</SC.TitleInput>
            <Input type={'text'} name={'lastName'} control={control} placeholder={t('edit.enterLastName')} />
          </SC.FormElement>
        </Grid>

        <Grid item xs={5.8}>
          <SC.FormElement>
            <SC.TitleInput>{t('edit.gender')}</SC.TitleInput>
            <ControlSplitButtonGroup name={'gender'} control={control} list={[MALE, FEMALE]} />
          </SC.FormElement>
        </Grid>
        <Grid item xs={5.8}>
          <SC.FormElement>
            <SC.TitleInput>{t('edit.date')}</SC.TitleInput>
            <Input type={'date'} name={'date'} control={control} />
          </SC.FormElement>
        </Grid>

        <Grid item xs={5.8}>
          <SC.FormElement>
            <SC.TitleInput>{t('edit.country')}</SC.TitleInput>
            <SingleDropdownInput
              list={selectData.country}
              name={'country'}
              control={control}
              placeholder={t('edit.selectCounty')}
            />
          </SC.FormElement>
        </Grid>
        <Grid item xs={5.8}>
          <SC.FormElement>
            <SC.TitleInput>{t('edit.city')}</SC.TitleInput>
            <SingleDropdownInput
              list={selectData.city}
              name={'city'}
              control={control}
              placeholder={t('edit.selectCity')}
            />
          </SC.FormElement>
        </Grid>

        <Grid item xs={5.8}>
          <SC.FormElement>
            <SC.TitleInput>{t('edit.language')}</SC.TitleInput>
            <ProfileEditLanguageSelector control={control} watch={watch} />
          </SC.FormElement>
        </Grid>
        <Grid item xs={5.8}>
          <SC.FormElement>
            <SC.TitleInput>{t('edit.gmt')}</SC.TitleInput>
            <SingleDropdownInput
              list={selectData.gmt}
              name={'gmt'}
              control={control}
              placeholder={t('edit.selectGmt')}
            />
          </SC.FormElement>
        </Grid>
      </Grid>
    </SC.Wrapper>
  );
};

export default PersonalDataEdit;
