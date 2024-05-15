import { KeyboardEventHandler } from 'react';

export interface KeyWordsInputProps {
  active: boolean;
  value: string;
  handleKeyPress: KeyboardEventHandler<HTMLDivElement>;
  changeKeyWords: (e: string) => void;
  keyWordsAll: string[];
  handleBlurPress: () => void;
  deleteKeyWords: (e: string) => void;
}
