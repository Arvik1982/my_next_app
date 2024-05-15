import { FC } from 'react';
import Image from 'next/image';
import * as SC from './KeyWordsInput.style';
import { KeyWordsInputProps } from './KeyWordsInput.type';

const KeyWordsInput: FC<KeyWordsInputProps> = ({
  value,
  handleKeyPress,
  changeKeyWords,
  handleBlurPress,
  keyWordsAll,
  deleteKeyWords,
  active,
}) => {
  return (
    <>
      <SC.BoxContainerInput active={active}>
        <Image src='/images/search.svg' alt='search' width={24} height={24} />
        <SC.CustomTextField
          id='outlined-basic'
          value={value}
          onChange={(e) => changeKeyWords(e.currentTarget.value)}
          onBlur={handleBlurPress}
          onKeyPress={handleKeyPress}
          variant='outlined'
          placeholder={'Добавьте ключевые слова'}
        />
      </SC.BoxContainerInput>
      {!!keyWordsAll && (
        <SC.FiltersContainer>
          {keyWordsAll.map((i) => {
            return (
              <SC.Filters key={i}>
                {i}
                {
                  <SC.Delete
                    src={'/images/exit.svg'}
                    alt={'exit'}
                    width={24}
                    height={24}
                    onClick={() => deleteKeyWords(i)}
                  />
                }
              </SC.Filters>
            );
          })}
        </SC.FiltersContainer>
      )}
    </>
  );
};

export default KeyWordsInput;
