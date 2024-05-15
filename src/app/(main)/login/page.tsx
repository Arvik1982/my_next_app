'use client';
import { useState } from 'react';
import Validation from '@/app/(main)/(protected)/_components/Validation/Validation';
import ForgotPassword from '@/app/(main)/(protected)/profile/security/AuthenticationService/AuthorizationViaEmail/ForgotPassword/ForgotPassword';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/lib/storeHooks';
import { resetPasswordRequest } from '@/lib/store/authSlice/authSlice';

const Login = () => {
  const [openWindow, setOpenWindow] = useState('Validation');
  const [currentEmail, setCurrentEmail] = useState('');
  const router = useRouter();
  const dispatch = useAppDispatch();

  const forgotPassword = async (email: string) => {
    try {
      await dispatch(resetPasswordRequest({ email })).unwrap();
    } catch (error) {
      console.error((error as Error).message);
    }
  };
  const openForgotPassword = (email = '') => {
    setCurrentEmail(email);
    setOpenWindow('ForgotPassword');
    forgotPassword(email);
  };

  const closeWindow = () => {
    setOpenWindow('');
    router.push('/specialists');
  };
  const resend = (email: string) => {
    forgotPassword(email);
  };
  return (
    <>
      <Validation open={openWindow === 'Validation'} openForgotPassword={openForgotPassword} exit={closeWindow} />
      <ForgotPassword email={currentEmail} resend={resend} open={openWindow === 'ForgotPassword'} exit={closeWindow} />
    </>
  );
};

export default Login;
