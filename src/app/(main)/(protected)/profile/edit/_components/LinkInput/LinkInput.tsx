import { FC } from 'react';
import * as SC from './LinkInput.style';
import { Input } from '@/app/components';
import Image from 'next/image';
import { LinkInputProps } from './LinkInput.types';
import { useAppSelector } from '@/lib/storeHooks';
import { useTranslation } from 'react-i18next';

const LinkInput: FC<LinkInputProps> = ({ control, removeInput, index }) => {
  const ICON_SIZE = 24;
  const contacts = useAppSelector((state) => state.profile.contacts);
  const { t } = useTranslation();

  return (
    <SC.Wrapper>
      <SC.InputBlock>
        <Input
          type={'text'}
          name={`links.${index}.linkName`}
          placeholder={t('edit.linkName')}
          control={control}
          defaultValue={contacts.links[index]?.linkName}
        />
      </SC.InputBlock>
      <Input
        type={'text'}
        name={`links.${index}.linkURL`}
        placeholder={t('edit.linkURL')}
        control={control}
        defaultValue={contacts.links[index]?.linkURL}
      />
      <SC.BasketButton onClick={() => removeInput(index)}>
        <Image src='/images/basket.svg' alt='basket icon' height={ICON_SIZE} width={ICON_SIZE} />
      </SC.BasketButton>
    </SC.Wrapper>
  );
};

export default LinkInput;
