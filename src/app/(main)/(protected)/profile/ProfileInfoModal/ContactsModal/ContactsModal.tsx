import React, { FC } from 'react';
import ProfileInfoModal from '../ProfileInfoModal';
import * as SC from './ContactsModal.style';
import { ContactsModalProps } from './ContactsModal.type';
import { useTranslation } from 'react-i18next';
import ContactsBlock from '../../_components/ContactsBlock/ContactsBlock';

const ContactsModal: FC<ContactsModalProps> = ({ exit, open, specialist }) => {
  const { t } = useTranslation();
  const contacts = [specialist.email, '+7 937 856 45 90'];
  return (
    <ProfileInfoModal exit={exit} open={open}>
      <SC.Title> {t('specialists.contacts')}</SC.Title>
      <SC.ContactsContainer>
        <ContactsBlock contacts={contacts} />
      </SC.ContactsContainer>
    </ProfileInfoModal>
  );
};

export default ContactsModal;
