import { FC, MouseEvent } from 'react';
import * as SC from './LocalizationSelect.style';
import { LocalizationProps } from './LocalizationSelect.type';

const LocalizationSelect: FC<LocalizationProps> = ({ lang, setLang, languagesSet }) => {
  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLang(e.currentTarget.textContent as string);
    return;
  };
  return (
    <SC.SelectWrapper>
      {languagesSet.map((el) => (
        <SC.Localization key={el} active={lang === el} onClick={handleOnClick}>
          {el}
        </SC.Localization>
      ))}
    </SC.SelectWrapper>
  );
};

export default LocalizationSelect;
