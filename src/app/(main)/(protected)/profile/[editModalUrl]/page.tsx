'use client';

import { useDispatch } from 'react-redux';
import { useParams, useRouter } from 'next/navigation';
import { setOpen, setPage } from '@/lib/store/profileEditSlice/profileEditSlice';
import { useAppSelector } from '@/lib/storeHooks';
import { useEffect } from 'react';

const EditModalPageRedirect = () => {
  const openModal = useAppSelector((state) => state.profileEditPage.openModal);
  const { editModalUrl } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    router.replace('/profile');
    window.history.replaceState({}, '', `/profile/${editModalUrl}`);
  }, []);

  if (!openModal) {
    if (typeof editModalUrl === 'string') {
      dispatch(setPage(editModalUrl));
    } else {
      dispatch(setPage(editModalUrl[0]));
    }
    dispatch(setOpen(true));
  }
  return <></>;
};

export default EditModalPageRedirect;
