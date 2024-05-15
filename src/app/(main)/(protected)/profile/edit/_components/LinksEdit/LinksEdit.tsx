import { FC, MouseEvent } from 'react';
import * as SC from './LinksEdit.style';
import { InputAdornment } from '@mui/material';
import Image from 'next/image';
import LinkInput from '../LinkInput/LinkInput';
import { LinksEditProps } from './LinksEdit.types';
import { Input } from '@/app/components';
import { useTranslation } from 'react-i18next';
import { useFieldArray } from 'react-hook-form';
import { useAppSelector } from '@/lib/storeHooks';

const LinksEdit: FC<LinksEditProps> = ({ control }) => {
  const ICON_SIZE = 24;
  const { t } = useTranslation();
  const contacts = useAppSelector((state) => state.profile.contacts);
  const { fields, remove, append } = useFieldArray({
    name: 'links',
    control,
  });

  const addLink = (e: MouseEvent<HTMLButtonElement>) => {
    append({
      linkName: '',
      linkURL: '',
    });
    e.preventDefault();
  };
  return (
    <SC.Wrapper>
      <SC.Title>{t('edit.links')}</SC.Title>
      <SC.FormElement>
        <SC.Label>{t('edit.personalSite')}</SC.Label>
        <Input
          type={'text'}
          name={'site'}
          control={control}
          placeholder={t('edit.enterSite')}
          defaultValue={contacts.site}
        />
      </SC.FormElement>
      {fields.map((field, index) => {
        return <LinkInput key={field.id} control={control} removeInput={remove} index={index} />;
      })}
      <SC.ButtonBlock onClick={addLink}>
        <InputAdornment position='start'>
          <Image src='/images/plusBlack.svg' alt='plus icon' height={ICON_SIZE} width={ICON_SIZE} />
        </InputAdornment>
        <SC.Button>{t('edit.addLink')}</SC.Button>
      </SC.ButtonBlock>
    </SC.Wrapper>
  );
};

export default LinksEdit;
