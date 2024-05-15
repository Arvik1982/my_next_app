'use client';

import AccountVerified from '@/app/(main)/(protected)/_components/AccountVerified/AccountVerified';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const RegistrationResult = ({
  params,
}: {
  params: {
    code: string;
  };
}) => {
  const [openWindow, setOpenWindow] = useState('AccountVerified');
  const router = useRouter();
  const closeWindow = () => {
    setOpenWindow('');
    router.push('/specialists');
  };
  return (
    <>
      <AccountVerified params={params} exit={closeWindow} open={openWindow === 'AccountVerified'} />
    </>
  );
};

export default RegistrationResult;
