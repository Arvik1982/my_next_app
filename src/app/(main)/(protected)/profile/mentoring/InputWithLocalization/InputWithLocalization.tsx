import { FC, useState } from 'react';
import { Controller } from 'react-hook-form';
import * as SC from './InputWithLocalization.style';
import LocalizationSelect from './LocalizationSelect/LocalizationSelect';
import { InputWithLocalizationProps } from './InputWithLocalization.type';
import { useTranslation } from 'react-i18next';

const localizations = ['Рус', '中文', 'Eng'];

const InputWithLocalization: FC<InputWithLocalizationProps> = ({ name, placeholder, control, watch }) => {
  const [lang, setLang] = useState(localizations[0]);
  const { t } = useTranslation();
  const MAX_LENGTH = 120;
  const charLeft = watch('aboutYourself') ? MAX_LENGTH - watch('aboutYourself').length : MAX_LENGTH;
  return (
    <SC.InputWithLocalizationWrapper>
      <LocalizationSelect lang={lang} setLang={setLang} languagesSet={localizations} />
      <Controller
        name={name}
        control={control}
        defaultValue={''}
        render={({ field: { onChange, value, onBlur } }) => (
          <SC.StyledTextareaAutosize
            placeholder={placeholder}
            maxLength={MAX_LENGTH}
            onChange={onChange}
            value={value}
            onBlur={onBlur}
          />
        )}
      />
      <SC.SymbolsLeft>{t('mentoring.textLeft', { charLeft: charLeft })}</SC.SymbolsLeft>
    </SC.InputWithLocalizationWrapper>
  );
};

export default InputWithLocalization;
