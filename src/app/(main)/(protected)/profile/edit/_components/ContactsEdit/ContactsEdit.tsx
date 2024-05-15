import { FC } from 'react';
import * as SC from './ContactsEdit.style';
import { Input, SingleDropdownInput } from '@/app/components';
import { ContactsEditProps } from './ContactsEdit.types';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/lib/storeHooks';

const selectData = ['+7'];

const ContactsEdit: FC<ContactsEditProps> = ({ control }) => {
  const { t } = useTranslation();
  const contacts = useAppSelector((state) => state.profile.contacts);
  return (
    <SC.Wrapper>
      <SC.Title>{t('edit.contacts')}</SC.Title>
      <SC.FormElement>
        <SC.Label>{t('edit.phone')}</SC.Label>
        <SC.PhoneBlock>
          <SC.DropdownInputBlock>
            <SingleDropdownInput
              list={selectData}
              name={'phone.phoneCode'}
              control={control}
              defaultValue={contacts.phone.phoneCode}
            />
          </SC.DropdownInputBlock>
          <Input
            type={'number'}
            name={'phone.phoneNumber'}
            control={control}
            placeholder={t('edit.enterPhoneNumber')}
            defaultValue={contacts.phone.phoneNumber}
          />
        </SC.PhoneBlock>
      </SC.FormElement>
      <SC.FormElement>
        <SC.Label>{t('edit.email')}</SC.Label>
        <Input
          type={'email'}
          name={'email'}
          control={control}
          placeholder={t('edit.enterEmail')}
          defaultValue={contacts.email}
        />
      </SC.FormElement>
    </SC.Wrapper>
  );
};

export default ContactsEdit;
