'use client';
import { FC, useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import Cover from '../Cover/Cover';
import PersonalDataEdit from '../PersonalDataEdit/PersonalDataEdit';
import SpecializationEdit from '../SpecializationEdit/SpecializationEdit';
import { ProfileFormValues } from './PersonalDataTypes';
import * as SC from './PersonalData.style';
import { useAppDispatch, useAppSelector } from '@/lib/storeHooks';
import {
  createUserSpecialization,
  fetchUserSpecialization,
  setProfile,
  setSpecializationIds,
  updateUserSpecialization,
} from '@/lib/store/profileSlice/profileSlice';
import { SnackbarAlert } from '@/app/components';
import { SubmitSplitButtons } from '../SubmitSplitButtons/SubmitSplitButtons';
import { setUser, updateUser } from '@/lib/store/authSlice/authSlice';
import { IUpdateUser, IUserSpecializationBody, Specialization } from '@/lib/store/types';
import { useTranslation } from 'react-i18next';
import {
  translateGradeIntoEng,
  translateGradeIntoRus,
  translateStatusIntoEng,
  translateStatusIntoRus,
} from '@/utils/utils';

const PersonalData: FC = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.profile.profile);
  const specializationIds = useAppSelector((state) => state.profile.specializationIds);
  const user = useAppSelector((state) => state.auth.user);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const { t } = useTranslation();
  const { handleSubmit, watch, control } = useForm<ProfileFormValues>({
    values: {
      ...profile,
      status: translateStatusIntoRus(profile.status),
      grade: translateGradeIntoRus(profile.grade),
      specializations: getSpecializationValues(),
    },
  });

  function getSpecializationValues() {
    if (profile.specializations.length > 0) {
      return profile.specializations.map((item) => {
        return {
          name: item.name,
          direction: {
            name: item.direction.name,
          },
        };
      });
    } else {
      return [
        {
          name: '',
          direction: {
            name: '',
          },
        },
      ];
    }
  }

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const { replace } = useFieldArray({
    name: 'specializations',
    control,
  });

  const updateUserInfo = async (queryParam: IUpdateUser) => {
    try {
      await dispatch(updateUser(queryParam)).unwrap();
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const addUserSpecialization = async (queryParam: IUserSpecializationBody) => {
    try {
      await dispatch(createUserSpecialization(queryParam)).unwrap();
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const changeUserSpecialization = async (queryParam: IUserSpecializationBody) => {
    try {
      await dispatch(updateUserSpecialization(queryParam)).unwrap();
    } catch (error) {
      if ((error as Error).message === '404') {
        await addUserSpecialization(queryParam);
      }
    }
  };

  const getUserSpecialization = async (userId: string) => {
    try {
      const { specializations } = await dispatch(fetchUserSpecialization({ user_uid: userId })).unwrap();
      const specIds = getInitialSpecIds(specializations);
      dispatch(setSpecializationIds(specIds));
      replace(specializations);
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const getInitialSpecIds = (specialization: Specialization[]) => {
    const specializationIds = specialization.map((item, index) => {
      if (item?.id) {
        return { id: item.id, index };
      }
    });
    return specializationIds as { id: number; index: number }[];
  };

  const onSubmit = handleSubmit((profileObj) => {
    const { firstName, lastName, date, link, grade, status } = profileObj;
    const updateParam: IUpdateUser = {
      first_name: firstName,
      second_name: lastName,
      birthday: date,
      username: link,
    };
    const updateGrade = translateGradeIntoEng(grade);
    const updateStatus = translateStatusIntoEng(status);
    updateUserInfo(updateParam);
    changeUserSpecialization({ status: updateStatus, grade: updateGrade, specialization_ids: specializationIds });
    dispatch(setProfile(profileObj));
    setSnackbarOpen(true);
    setSnackbarMessage(t('snackbar.updateUser'));
  });

  useEffect(() => {
    if (user?.uid) {
      getUserSpecialization(user.uid);
    }
  }, []);

  return (
    <SC.FormWrapper onSubmit={onSubmit}>
      <SC.Container>
        <Cover />
        <PersonalDataEdit control={control} watch={watch} />
      </SC.Container>
      <SC.Container>
        <SpecializationEdit control={control} watch={watch} />
      </SC.Container>
      <SubmitSplitButtons />
      <SnackbarAlert onClose={handleSnackbarClose} open={snackbarOpen} message={snackbarMessage} />
    </SC.FormWrapper>
  );
};

export default PersonalData;
