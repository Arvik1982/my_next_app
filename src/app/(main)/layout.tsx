'use client';
import { FC, PropsWithChildren, useEffect } from 'react';
import Header from './_components/Header/Header';
import Menu from './_components/Menu/Menu';
import { Grid } from '@mui/material';
import Subscriptions from './_components/Subscriptions/Subscriptions';
import { checkUser, setUser } from '@/lib/store/authSlice/authSlice';
import { useAppDispatch } from '@/lib/storeHooks';
import { usePathname, useRouter } from 'next/navigation';
import { setPersonalData } from '@/lib/store/profileSlice/profileSlice';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const router = useRouter();

  const checkAuth = async () => {
    try {
      const userData = await dispatch(checkUser()).unwrap();
      if (userData) {
        dispatch(setUser(userData));
        dispatch(setPersonalData(userData));
        if (pathname === '/login') {
          router.push('/profile');
        }
      }
    } catch (error) {
      console.error((error as Error).message);
      if (pathname.includes('/profile') || pathname.includes('/account')) {
        router.push('/login');
      }
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={3}>
        <Menu />
        <Subscriptions />
      </Grid>
      <Grid item xs={9}>
        {children}
      </Grid>
    </Grid>
  );
};

export default MainLayout;
