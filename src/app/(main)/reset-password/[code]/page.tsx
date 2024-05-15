'use client';
import NewPassword from '@/app/(main)/(protected)/profile/security/AuthenticationService/AuthorizationViaEmail/NewPassword/NewPassword';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const ResetPassword = ({
  params,
}: {
  params: {
    code: string;
  };
}) => {
  const [openWindow, setOpenWindow] = useState('NewPassword');
  const router = useRouter();
  const closeWindow = () => {
    setOpenWindow('');
    router.push('/specialists');
  };
  return (
    <>
      <NewPassword params={params} exit={closeWindow} open={openWindow === 'NewPassword'} />
    </>
  );
};

export default ResetPassword;
