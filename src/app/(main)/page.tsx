'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Redirect = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/specialists');
  }, []);
  return;
};

export default Redirect;
