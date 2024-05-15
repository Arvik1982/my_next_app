import { SingleDropdownInput } from '@/app/components';
import { setLang } from '@/lib/store/languageSlice/languageSlice';
import { useAppDispatch, useAppSelector } from '@/lib/storeHooks';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ProfileEditLanguageSelectorProps } from './LanguageSelector.type';
import { i18n } from 'i18next';
import { AppDispatch } from '@/lib/store/store';
import ReactFlagsSelect from 'react-flags-select';

const languages = {
  header: ['RU', 'EN', '中文'],
  profileEdit: ['Русский', 'English', '中文'],
};

const changeLanguageHandler = (lang: string, i18n: i18n, dispatch: AppDispatch) => {
  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    dispatch(setLang(lang));
  };

  switch (lang) {
    case 'Русский':
    case 'RU':
      changeLang('ru');
      break;
    case 'English':
    case 'US':
      changeLang('en');
      break;
    case '中文':
    case 'CN':
      changeLang('cn');
      break;
    default:
      changeLang('ru');
  }
};

export const ProfileEditLanguageSelector: FC<ProfileEditLanguageSelectorProps> = ({ control, watch }) => {
  const { i18n, t } = useTranslation();
  const dispatch = useAppDispatch();
  const lang = watch('language');

  useEffect(() => {
    changeLanguageHandler(lang, i18n, dispatch);
  }, [lang]);

  return (
    <SingleDropdownInput
      list={languages.profileEdit}
      name={'language'}
      control={control}
      placeholder={t('edit.selectLanguage')}
    />
  );
};

export const HeaderLanguageSelector = () => {
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const currentLang = useAppSelector((state) => state.lang.lang);

  return (
    // <select
    //   name='language'
    //   onChange={(ev) => changeLanguageHandler(ev.target.value, i18n, dispatch)}
    //   id='languageSelect'
    // >
    //   {languages.header.map((el) => (
    //     <option key={el} value={el == '中文' ? 'CN' : el} selected={currentLang === el.toLowerCase()}>
    //       {el}
    //     </option>
    //   ))}
    // </select>
    <ReactFlagsSelect
      countries={['RU', 'US', 'CN']}
      placeholder='Select a language'
      selected={currentLang === 'en' ? 'US' : currentLang.toUpperCase()}
      customLabels={{ RU: 'RU', US: 'EN', CN: 'CN' }}
      onSelect={(e) => {
        changeLanguageHandler(e, i18n, dispatch);
      }}
    />
  );
};
