'use client';
import React, { useState } from 'react';
import * as SC from './AuthenticationService.style';
import AuthorizationViaEmail from './AuthorizationViaEmail/AuthorizationViaEmail';
import EditNotice from './EditNotice/EditNotice';
import ThirdPartyServices from './ThirdPartyServices/ThirdPartyServices';
import Verification from './Verification/Verification';
import DisableVerification from './DisableVerification/DisableVerification';

import { useTranslation } from 'react-i18next';
import { SnackbarAlert } from '@/app/components';

const AuthenticationService = () => {
  const { t } = useTranslation();
  const [gosuslugiChecked, setGosuslugiChecked] = useState(false);
  const [openWindow, setOpenWindow] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const gosuslugiToggle = () => {
    if (gosuslugiChecked) {
      setOpenWindow('DisableGosuslugi');
    } else {
      setGosuslugiChecked(true);
      setSnackbarOpen(true);
      setSnackbarMessage(t('snackbar.gosuslugiOn'));
    }
  };

  const disableGosuslugi = () => {
    setGosuslugiChecked(false);
    setOpenWindow('');
    setSnackbarOpen(true);
    setSnackbarMessage(t('snackbar.gosuslugiOff'));
  };

  const exit = () => setOpenWindow('');

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <SC.Container>
      <Verification gosuslugiChecked={gosuslugiChecked} gosuslugiToggle={gosuslugiToggle} />
      <AuthorizationViaEmail />
      <ThirdPartyServices
        gosuslugiToggle={gosuslugiToggle}
        gosuslugiChecked={gosuslugiChecked}
        openWindow={openWindow}
        setOpenWindow={setOpenWindow}
      />
      <EditNotice />
      <DisableVerification disable={disableGosuslugi} exit={exit} open={openWindow === 'DisableGosuslugi'} />
      <SnackbarAlert onClose={handleSnackbarClose} open={snackbarOpen} message={snackbarMessage} />
    </SC.Container>
  );
};

export default AuthenticationService;
