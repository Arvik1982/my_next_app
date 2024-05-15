'use client';
import { FC, useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import * as SC from './FieldOfWorkInput.style';
import { ObjectDropdownInput } from '@/app/components';
import Image from 'next/image';
import { FieldOfWorkInputProps } from './FieldOfWorkInputTypes';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@/lib/storeHooks';
import {
  fetchDirection,
  fetchSpecialization,
  setDirectionIds,
  setSpecializationIds,
} from '@/lib/store/profileSlice/profileSlice';
import { IDirection } from '@/lib/store/types';

const FieldOfWorkInput: FC<FieldOfWorkInputProps> = ({ control, removeInput, index, watch }) => {
  const { t } = useTranslation();
  const ICON_SIZE = 24;
  const dispatch = useAppDispatch();
  const [direction, setDirection] = useState<IDirection[]>([]);
  const [specialization, setSpecialization] = useState<IDirection[]>([]);

  const directionId = useAppSelector((state) => state.profile.directionIds[index]);
  const specializationId = useAppSelector((state) => state.profile.specializationIds[index]);

  const directionNameWatch = watch(`specializations.${index}.direction.name`);
  const specializationNameWatch = watch(`specializations.${index}.name`);

  const findDirectionId = () => {
    direction.map((item) => {
      if (item.name === directionNameWatch) {
        dispatch(setDirectionIds({ index, id: item.id }));
      }
    });
  };

  const findSpecializationId = () => {
    specialization.map((item) => {
      if (item.name === specializationNameWatch) {
        dispatch(setSpecializationIds([{ index, id: item.id }]));
      }
    });
  };

  const getDirection = async () => {
    const data = await dispatch(fetchDirection()).unwrap();
    setDirection(data);
  };

  const getSpecialization = async (id: number) => {
    const data = await dispatch(fetchSpecialization({ direction_id: id })).unwrap();
    setSpecialization(data);
  };

  useEffect(() => {
    getDirection();
  }, []);

  useEffect(() => {
    findDirectionId();
    if (directionId) {
      getSpecialization(directionId);
    }
  }, [directionNameWatch, directionId]);

  useEffect(() => {
    findSpecializationId();
  }, [specializationNameWatch, specializationId]);

  return (
    <Grid container>
      <Grid item xs={4.6} marginRight={1}>
        <SC.FormElement>
          <SC.TitleInput>{t('edit.direction')}</SC.TitleInput>
          <ObjectDropdownInput
            list={direction}
            name={`specializations.${index}.direction.name`}
            control={control}
            placeholder={t('edit.selectDirection')}
          />
        </SC.FormElement>
      </Grid>
      <Grid item xs={6.7}>
        <SC.FormElement>
          <SC.TitleInput>{t('edit.specialization')}</SC.TitleInput>
          <ObjectDropdownInput
            list={specialization}
            name={`specializations.${index}.name`}
            control={control}
            placeholder={t('edit.selectSpecialization')}
            disabled={!directionNameWatch}
          />
        </SC.FormElement>
      </Grid>
      <Grid item xs={0.1} position={'relative'}>
        <SC.BasketButton onClick={(e) => removeInput(e, index)}>
          <Image src='/images/basket.svg' alt='basket icon' height={ICON_SIZE} width={ICON_SIZE} />
        </SC.BasketButton>
      </Grid>
    </Grid>
  );
};

export default FieldOfWorkInput;
