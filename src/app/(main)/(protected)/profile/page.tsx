'use client';
import { Grid } from '@mui/material';
import Content from './_components/Content/Content';
import Header from './_components/Header/Header';
import Info from './_components/Info/Info';
import { useAppSelector } from '@/lib/storeHooks';
import { useEffect, useState } from 'react';
import { ISpecialists } from '@/lib/store/types';

const ProfilePage = () => {
  const user = useAppSelector((state) => state.auth.user);
  const specialists = useAppSelector((state) => state.specialists.specialists);

  const [specialist, setSpecialist] = useState<ISpecialists | null>(null);

  const findSpecialistById = (uid: string) => {
    const foundSpecialist = specialists.find((specialist) => specialist.uid === uid);
    if (foundSpecialist) {
      setSpecialist(foundSpecialist);
    }
  };

  useEffect(() => {
    if (user) {
      findSpecialistById(user.uid);
    }
  }, []);

  return (
    <Grid container spacing={2} sx={{ paddingRight: '9rem' }}>
      <Grid item xs={12}>
        <Header specialist={specialist} />
      </Grid>
      <Grid item xs={7}>
        <Content />
      </Grid>
      <Grid item xs={5}>
        <Info />
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
