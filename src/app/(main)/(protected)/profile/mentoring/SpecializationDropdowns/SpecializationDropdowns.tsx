import * as SC from './SpecializationDropdowns.style';
import { FC, MouseEvent } from 'react';
import { Props } from './SpecializationDropdowns.type';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useFieldArray } from 'react-hook-form';
import { InputAdornment } from '@mui/material';
import FieldOfWorkInput from './FieldOfWorkInput/FieldOfWorkInput';

const SpecializationDropdowns: FC<Props> = ({ control }) => {
  const ICON_SIZE = 24;
  const { t } = useTranslation();

  const { fields, remove, append } = useFieldArray({
    name: 'specialization',
    control,
  });

  const addWorkInputs = (e: MouseEvent<HTMLButtonElement>) => {
    append({
      direction: '',
      specialization: '',
    });
    e.preventDefault();
  };
  return (
    <>
      <SC.DropdownsWrapper>
        {fields.map((field, index) => {
          return <FieldOfWorkInput key={field.id} control={control} removeInput={remove} index={index} />;
        })}
        {fields.length < 2 && (
          <SC.ButtonBlock onClick={addWorkInputs}>
            <InputAdornment position='start'>
              <Image src='/images/plusBlack.svg' alt='plus icon' height={ICON_SIZE} width={ICON_SIZE} />
            </InputAdornment>
            <SC.Button>{t('edit.addFieldOfWorkInput')}</SC.Button>
          </SC.ButtonBlock>
        )}
      </SC.DropdownsWrapper>
    </>
  );
};

export default SpecializationDropdowns;
