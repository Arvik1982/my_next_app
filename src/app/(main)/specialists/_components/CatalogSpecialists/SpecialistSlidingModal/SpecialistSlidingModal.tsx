'use client';
import React, { FC, useState } from 'react';
import { Grid } from '@mui/material';
import Header from '@/app/(main)/specialists/_components/CatalogSpecialists/SpecialistSlidingModal/Header/Header';
import ContentSlidingModalWindow from '@/app/(main)/specialists/_components/CatalogSpecialists/SpecialistSlidingModal/ContentSlidingModalWindow/ContentSlidingModalWindow';
import { SpecSlidingModalProps } from './SpecialistSlidingModal.type';
import { SlidingModalWindow } from '@/app/components';
import FilledInfo from '@/app/(main)/(protected)/profile/_components/FilledInfo/FilledInfo';
import AboutMeModal from '@/app/(main)/(protected)/profile/ProfileInfoModal/AboutMeModal/AboutMeModal';
import ContactsModal from '@/app/(main)/(protected)/profile/ProfileInfoModal/ContactsModal/ContactsModal';
import LinksModal from '@/app/(main)/(protected)/profile/ProfileInfoModal/LinksModal/LinksModal';
import ExperienceModal from '@/app/(main)/(protected)/profile/ProfileInfoModal/ExperienceModal/ExperienceModal';
import EducationModal from '@/app/(main)/(protected)/profile/ProfileInfoModal/EducationModal/EducationModal';
import SkillsModal from '@/app/(main)/(protected)/profile/ProfileInfoModal/SkillsModal/SkillsModal';

const SpecialistSlidingModal: FC<SpecSlidingModalProps> = ({ handleClose, openModal, specialist }) => {
  const [openWindow, setOpenWindow] = useState('');
  const openAboutMeModal = () => {
    setOpenWindow('AboutMeModal');
  };
  const openContactsModal = () => {
    setOpenWindow('ContactsModal');
  };
  const openLinksModal = () => {
    setOpenWindow('LinksModal');
  };
  const openExperienceModal = () => {
    setOpenWindow('ExperienceModal');
  };
  const openEducationModal = () => {
    setOpenWindow('EducationModal');
  };
  const openSkillsModal = () => {
    setOpenWindow('SkillsModal');
  };
  const closeModalWindow = () => {
    setOpenWindow('');
  };
  return (
    <SlidingModalWindow open={openModal} handleClose={handleClose}>
      <Grid container spacing={2} sx={{ paddingRight: '1.25rem' }}>
        <Grid item xs={12}>
          <Header specialist={specialist} openContactsModal={openContactsModal} />
        </Grid>
        <Grid item xs={8}>
          {/* <ContentSlidingModalWindow projects={projects} /> */}
        </Grid>
        <Grid item xs={4}>
          <FilledInfo
            specialist={specialist}
            openAboutMeModal={openAboutMeModal}
            openContactsModal={openContactsModal}
            openLinksModal={openLinksModal}
            openExperienceModal={openExperienceModal}
            openEducationModal={openEducationModal}
            openSkillsModal={openSkillsModal}
          />
        </Grid>
      </Grid>
      <AboutMeModal specialist={specialist} exit={closeModalWindow} open={openWindow === 'AboutMeModal'} />
      <ContactsModal specialist={specialist} exit={closeModalWindow} open={openWindow === 'ContactsModal'} />
      <LinksModal specialist={specialist} exit={closeModalWindow} open={openWindow === 'LinksModal'} />
      <ExperienceModal specialist={specialist} exit={closeModalWindow} open={openWindow === 'ExperienceModal'} />
      <EducationModal specialist={specialist} exit={closeModalWindow} open={openWindow === 'EducationModal'} />
      <SkillsModal specialist={specialist} exit={closeModalWindow} open={openWindow === 'SkillsModal'} />
    </SlidingModalWindow>
  );
};

export default SpecialistSlidingModal;
