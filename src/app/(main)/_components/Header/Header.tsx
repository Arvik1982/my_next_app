'use client';
import { routs } from '@/lib/routes';
import * as SC from './Header.style';
import InputAdornment from '@mui/material/InputAdornment';
import Image from 'next/image';
import { useState } from 'react';
import Validation from '@/app/(main)/(protected)/_components/Validation/Validation';
import { useTranslation } from 'react-i18next';
import ProfilePopup from '../ProfilePopup/ProfilePopup';
import { useAppDispatch, useAppSelector } from '@/lib/storeHooks';
import RegistrationSuccessful from '@/app/(main)/(protected)/_components/RegistrationSuccessful/RegistrationSuccessful';
import BasicList from '@/app/(main)/_components/CreateProject/BasicList/BasicList';
import * as React from 'react';
import CreateProject from '@/app/(main)/_components/CreateProject/CreateProject';
import ForgotPassword from '../../(protected)/profile/security/AuthenticationService/AuthorizationViaEmail/ForgotPassword/ForgotPassword';
import { Avatar } from '@/app/components';
import { resetPasswordRequest, setSignUpModal } from '@/lib/store/authSlice/authSlice';
import { HeaderLanguageSelector } from '../LanguageSelector/LanguageSelector';

const Header = () => {
  const ICON_SIZE = 24;
  const AVATAR_SIZE = 48;
  const [openBasicList, setOpenBasicList] = useState(false);
  const [createModal, setOpenCreateModal] = useState(false);
  const [currentEmail, setCurrentEmail] = useState('');
  const [openWindow, setOpenWindow] = useState('');
  const user = useAppSelector((state) => state.auth.user);
  const auth = useAppSelector((state) => state.auth.isAuthenticated);
  const isSignUp = useAppSelector((state) => state.auth.isSignUp);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const clickCreate = () => setOpenBasicList(true);
  const closeBasicList = () => {
    setOpenBasicList(false);
  };
  const openCreateModal = () => {
    setOpenCreateModal(true);
    closeBasicList();
  };
  const closeCreateModal = () => {
    setOpenCreateModal(false);
  };
  const openProfilePopup = () => {
    setOpenWindow('ProfilePopup');
  };
  const openValidation = () => {
    setOpenWindow('Validation');
  };

  const forgotPassword = async (email: string) => {
    try {
      await dispatch(resetPasswordRequest({ email })).unwrap();
    } catch (error) {
      console.error((error as Error).message);
    }
  };
  const openForgotPassword = (email = '') => {
    setCurrentEmail(email);
    setOpenWindow('ForgotPassword');
    forgotPassword(email);
  };

  const closeWindow = () => {
    setOpenWindow('');
  };

  const closeSignUpModal = () => {
    dispatch(setSignUpModal(false));
  };

  const resend = (email: string) => {
    forgotPassword(email);
  };
  return (
    <SC.Container>
      <SC.LogoLink href={`/${routs['Специалисты']}`}>
        <SC.LogoBlock>
          <SC.Logo />
          <SC.Name>Creative Hub</SC.Name>
        </SC.LogoBlock>
      </SC.LogoLink>
      <SC.CreateAndSearchContainer>
        <SC.InputContainer>
          <SC.SearchForm>
            <SC.Search
              placeholder={t('main.search')}
              startAdornment={
                <InputAdornment position='start'>
                  <Image src='/images/search.svg' alt='search icon' height={ICON_SIZE} width={ICON_SIZE} />
                </InputAdornment>
              }
            />
          </SC.SearchForm>
          {auth && (
            <div>
              <SC.ButtonCreate disableRipple onClick={clickCreate}>
                <Image src='/images/plus.svg' alt='plus icon' height={ICON_SIZE} width={ICON_SIZE} />
                <SC.ButtonText>Создать</SC.ButtonText>
              </SC.ButtonCreate>
              {openBasicList && <BasicList clickCreate={openCreateModal} closeBasicList={closeBasicList} />}
              {createModal && <CreateProject exit={closeCreateModal} />}
            </div>
          )}
        </SC.InputContainer>
        {auth ? (
          <SC.AvatarAndLangSelect>
            <HeaderLanguageSelector />
            <SC.AvatarContainer>
              <Avatar onClick={openProfilePopup} size={AVATAR_SIZE} />
            </SC.AvatarContainer>
          </SC.AvatarAndLangSelect>
        ) : (
          <SC.MUIButton disableRipple variant='contained' onClick={openValidation}>
            {t('main.signIn')}
          </SC.MUIButton>
        )}
      </SC.CreateAndSearchContainer>
      <Validation open={openWindow === 'Validation'} openForgotPassword={openForgotPassword} exit={closeWindow} />
      {user && <ProfilePopup open={openWindow === 'ProfilePopup'} exit={closeWindow} />}
      <RegistrationSuccessful open={isSignUp} exit={closeSignUpModal} />
      <ForgotPassword email={currentEmail} resend={resend} open={openWindow === 'ForgotPassword'} exit={closeWindow} />
    </SC.Container>
  );
};

export default Header;
