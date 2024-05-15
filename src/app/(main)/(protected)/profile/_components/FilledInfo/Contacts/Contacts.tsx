import React, { FC, useRef } from 'react';
import { ContactsProps } from './Contacts.types';
import * as SC from './Contacts.style';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import ContactsBlock from '../../ContactsBlock/ContactsBlock';

const Contacts: FC<ContactsProps> = ({ specialist, openContactsModal }) => {
  const ICON_SIZE = 16;
  const { t } = useTranslation();
  const contacts = [specialist.email, '+7 937 856 45 90'];
  return (
    <SC.Wrapper>
      <SC.TitleBlock onClick={openContactsModal}>
        <SC.Title>{t('specialists.contacts')}</SC.Title>
        <Image src={'/images/arrow-right.svg'} alt='arrow-right icon' width={ICON_SIZE} height={ICON_SIZE} />
      </SC.TitleBlock>
      <SC.InfoBlock>
        <ContactsBlock contacts={contacts} />
      </SC.InfoBlock>
    </SC.Wrapper>
  );
};

export default Contacts;
