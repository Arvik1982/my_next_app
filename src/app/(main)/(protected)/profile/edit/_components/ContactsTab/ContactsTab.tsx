'use client';
import { FC, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import * as SC from './ContactsTab.style';
import ContactsEdit from '../ContactsEdit/ContactsEdit';
import { ContactsFormValues, NetworkParams } from './ContactsTab.types';
import NetworksEdit from '../NetworksEdit/NetworksEdit';
import LinksEdit from '../LinksEdit/LinksEdit';
import { useAppDispatch, useAppSelector } from '@/lib/storeHooks';
import {
  createSocialNetwork,
  fetchSocialNetworks,
  setProfileContacts,
  updateSocialNetwork,
} from '@/lib/store/profileSlice/profileSlice';
import { SubmitSplitButtons } from '../SubmitSplitButtons/SubmitSplitButtons';
import { useTranslation } from 'react-i18next';
import { SnackbarAlert } from '@/app/components';

const ContactsTab: FC = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector((state) => state.profile.contacts);
  const user = useAppSelector((state) => state.auth.user);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const { t } = useTranslation();
  const { handleSubmit, control } = useForm<ContactsFormValues>({
    defaultValues: contacts,
  });

  const { replace } = useFieldArray({
    name: 'networks',
    control,
  });

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const addSocialNetwork = async (network_name: string, username: string) => {
    try {
      await dispatch(createSocialNetwork({ network_name, username })).unwrap();
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const changeSocialNetwork = async ({ network_name, username, id }: NetworkParams) => {
    try {
      await dispatch(updateSocialNetwork({ network_name, username, social_network_id: id })).unwrap();
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const getSocialNetwork = async () => {
    try {
      if (user) {
        const data = await dispatch(fetchSocialNetworks({ user_uid: user.uid })).unwrap();
        replace(data);
      }
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const onSubmit = handleSubmit((contactsObj) => {
    const { networks } = contactsObj;
    networks.map((network) => {
      const { network_name, id, username } = network;
      if (id) {
        changeSocialNetwork(network);
      } else {
        addSocialNetwork(network_name, username);
      }
    });
    getSocialNetwork();
    dispatch(setProfileContacts(contactsObj));
    setSnackbarOpen(true);
    setSnackbarMessage(t('snackbar.updateUser'));
  });

  return (
    <SC.FormWrapper onSubmit={onSubmit}>
      <SC.Container>
        <ContactsEdit control={control} />
      </SC.Container>
      <SC.Container>
        <NetworksEdit control={control} />
      </SC.Container>
      <SC.Container>
        <LinksEdit control={control} />
      </SC.Container>
      <SubmitSplitButtons />
      <SnackbarAlert onClose={handleSnackbarClose} open={snackbarOpen} message={snackbarMessage} />
    </SC.FormWrapper>
  );
};

export default ContactsTab;
