import { Dispatch, SetStateAction } from 'react';

export interface LocalizationProps {
  lang: string;
  setLang: Dispatch<SetStateAction<string>>;
  languagesSet: string[];
}

export interface LocalizationPropsStyle {
  active?: boolean;
}
