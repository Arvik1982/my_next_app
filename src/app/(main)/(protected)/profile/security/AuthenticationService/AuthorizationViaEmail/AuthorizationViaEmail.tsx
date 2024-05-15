'use client';

import * as SC from './AuthorizationViaEmail.style';
import * as SCASG from '../AuthenticationServiceGlobal.style';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ChangingPrimaryEmail from './ChangingPrimaryEmail/ChangingPrimaryEmail';
import ChangePassword from './ChangePassword/ChangePassword';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@/lib/storeHooks';
import ConfirmPrimaryEmail from './ConfirmPrimaryEmail/ConfirmPrimaryEmail';
import ConfirmationChangeEmail from './ConfirmationChangeEmail/ConfirmationChangeEmail';
import { SnackbarAlert } from '@/app/components';
import { changeEmailCancel, changeEmailResend, resetPasswordRequest } from '@/lib/store/authSlice/authSlice';
import { formatDateTime } from '@/utils/utils';

const AuthorizationViaEmail = () => {
  const ICON_SIZE = 44;
  const { t } = useTranslation();
  const user = useAppSelector((state) => state.auth.user);
  const [openWindow, setOpenWindow] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [isEmailChanging, setIsEmailChanging] = useState(false);
  const [isEmailVerify, setIsEmailVerify] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const dispatch = useAppDispatch();

  const forgotPassword = async (email: string) => {
    try {
      await dispatch(resetPasswordRequest({ email })).unwrap();
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const cancelNewEmail = async () => {
    try {
      await dispatch(changeEmailCancel()).unwrap();
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const resendNewEmail = async (email: string) => {
    try {
      await dispatch(changeEmailResend({ email })).unwrap();
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const changeEmail = () => {
    setOpenWindow('ChangingPrimaryEmail');
  };
  const closeWindow = () => {
    setOpenWindow('');
  };
  const changePassword = () => {
    setOpenWindow('ChangePassword');
  };
  const openForgotPassword = (email = '') => {
    setOpenWindow('ForgotPassword');
    forgotPassword(email);
  };
  const openConfirmationChangeEmail = () => {
    setOpenWindow('ConfirmationChangeEmail');
    setIsEmailChanging(true);
  };
  const cancelChangingEmail = () => {
    cancelNewEmail();
    setIsEmailChanging(false);
    setSnackbarOpen(true);
    setSnackbarMessage(t('snackbar.changeEmailCanceled'));
  };
  const resendEmail = (email: string) => {
    resendNewEmail(email);
    closeWindow();
    setSnackbarOpen(true);
    setSnackbarMessage(t('snackbar.resendEmailNotice'));
  };
  const changePasswordNotice = () => {
    closeWindow();
    setSnackbarOpen(true);
    setSnackbarMessage(t('snackbar.changePassword'));
  };
  const resendPassword = (email: string) => {
    forgotPassword(email);
    closeWindow();
  };

  useEffect(() => {
    const emailVerify = localStorage.getItem('emailVerify') ? true : false;
    setIsEmailVerify(emailVerify);
  }, []);

  return (
    <SCASG.PaperContainer>
      <SCASG.Title>{t('authorization.title')}</SCASG.Title>
      {isEmailChanging && <ConfirmPrimaryEmail email={newEmail} resend={resendEmail} cancel={cancelChangingEmail} />}
      <SCASG.ServicesContainer>
        <SCASG.ServicesContent>
          <Image src={'/images/email.svg'} alt={'email'} width={ICON_SIZE} height={ICON_SIZE} />
          <SCASG.textContent>
            <SCASG.Accounts>
              {t('authorization.email')}
              {isEmailVerify && !isEmailChanging ? (
                <SC.ConfirmNotice>
                  <Image src={'/images/checkCircleGreen.svg'} alt={'check icon'} width={12} height={12} />
                  {t('authorization.confirmed')}
                </SC.ConfirmNotice>
              ) : (
                <SC.ConfirmNotice>
                  <Image src={'/images/errorPassword.svg'} alt={'warning icon'} width={12} height={12} />
                  {t('authorization.notConfirmed')}
                </SC.ConfirmNotice>
              )}
            </SCASG.Accounts>
            <SCASG.Prompt>{isEmailChanging ? newEmail : user?.email}</SCASG.Prompt>
          </SCASG.textContent>
        </SCASG.ServicesContent>
        <SC.ButtonEmail disableRipple onClick={changeEmail}>
          <SC.ButtonText>{t('authorization.change')}</SC.ButtonText>
        </SC.ButtonEmail>
        <ChangingPrimaryEmail
          exit={closeWindow}
          open={openWindow === 'ChangingPrimaryEmail'}
          extend={openConfirmationChangeEmail}
          setNewEmail={setNewEmail}
        />
        <ConfirmationChangeEmail
          open={openWindow === 'ConfirmationChangeEmail'}
          exit={closeWindow}
          resend={resendEmail}
          email={newEmail}
        />
      </SCASG.ServicesContainer>
      <SCASG.ServicesContainer>
        <SCASG.ServicesContent>
          <Image src={'/images/password.svg'} alt={'password'} width={ICON_SIZE} height={ICON_SIZE} />
          <SCASG.textContent>
            <SCASG.Accounts>{t('authorization.password')}</SCASG.Accounts>
            <SCASG.Prompt>{t('authorization.passChanged')}</SCASG.Prompt>
            <SCASG.Prompt>{formatDateTime(user?.last_password_change_at)}</SCASG.Prompt>
          </SCASG.textContent>
        </SCASG.ServicesContent>
        <SC.ButtonGroup>
          <SC.ButtonEmail disableRipple onClick={() => openForgotPassword(user?.email)}>
            <SC.ButtonText>{t('authorization.forgotPass')}</SC.ButtonText>
          </SC.ButtonEmail>
          <SC.ButtonEmail disableRipple onClick={changePassword}>
            <SC.ButtonText>{t('authorization.change')}</SC.ButtonText>
          </SC.ButtonEmail>
          <ChangePassword
            open={openWindow === 'ChangePassword'}
            exit={closeWindow}
            openForgotPassword={openForgotPassword}
            showNotice={changePasswordNotice}
          />
          <ForgotPassword
            email={user?.email || ''}
            resend={resendPassword}
            open={openWindow === 'ForgotPassword'}
            exit={closeWindow}
          />
        </SC.ButtonGroup>
      </SCASG.ServicesContainer>
      <SnackbarAlert onClose={handleSnackbarClose} open={snackbarOpen} message={snackbarMessage} />
    </SCASG.PaperContainer>
  );
};

export default AuthorizationViaEmail;
