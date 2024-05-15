import { SlidingModalWindow } from '@/app/components';
import { ExperienceTab } from '../../experience/Content/ExperienceTab';
import * as SC from './InfoSlidingModal.style';
import ProfileCompleteness from '@/app/(main)/_components/ProfileCompleteness/ProfileCompleteness';
import MentoringTab from '../../mentoring/MentoringTab/MentoringTab';
import { useAppDispatch, useAppSelector } from '@/lib/storeHooks';
import { setOpen, setPage } from '@/lib/store/profileEditSlice/profileEditSlice';
import MainTab from '../../edit/_components/MainTab/MainTab';
import ContactsTab from '../../edit/_components/ContactsTab/ContactsTab';
import { EducationTab } from '../../education/EducationTab';
import AuthenticationService from '../../security/AuthenticationService/AuthenticationService';
import { useEffect } from 'react';

export const InfoSlidingModal = () => {
  const open = useAppSelector((state) => state.profileEditPage.openModal);
  const pageName = useAppSelector((state) => state.profileEditPage.page);
  const dispatch = useAppDispatch();

  useEffect(() => {
    pageName && window.history.replaceState(null, '', `/profile/${pageName}`);
  }, [pageName]);

  const componentsList = {
    main: <MainTab />,
    contacts: <ContactsTab />,
    education: <EducationTab />,
    experience: <ExperienceTab />,
    mentoring: <MentoringTab />,
    entry_and_security: <AuthenticationService />,
  };

  const handleClose = () => {
    dispatch(setOpen(false));
    dispatch(setPage(''));
    window.history.replaceState(null, '', '/profile');
  };

  return (
    <SlidingModalWindow open={open} handleClose={handleClose}>
      <SC.ModalContainer>
        <SC.Container isSecurity={pageName === 'entry_and_security'}>
          <SC.ContentContainer>{componentsList[pageName as keyof object]}</SC.ContentContainer>
          <ProfileCompleteness
            mainPercentage={0}
            contactsPercentage={0}
            experiencePercentage={0}
            educationPercentage={0}
            mentorshipPercentage={0}
          />
        </SC.Container>
      </SC.ModalContainer>
    </SlidingModalWindow>
  );
};
