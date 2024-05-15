import React, { FC } from 'react';
import * as SC from './ProfilePopup.style';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { userLogout } from '@/lib/store/authSlice/authSlice';
import { useAppDispatch, useAppSelector } from '@/lib/storeHooks';
import { IUser } from '@/lib/store/types';
import { Avatar } from '@/app/components';

export interface ProfilePopupProps {
  exit: () => void;
  open: boolean;
}

const ProfilePopup: FC<ProfilePopupProps> = ({ exit, open }) => {
  const { t } = useTranslation();
  const ICON_SIZE = 24;
  const AVATAR_SIZE = 48;
  const LINE_HEIGHT = 1;
  const LINE_WIDTH = 268;
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const { first_name, second_name, email } = user as IUser;

  const handleLogout = () => {
    dispatch(userLogout());
    exit();
    router.push('/');
  };

  const handleProfile = () => {
    exit();
    router.push('/profile');
  };

  const handleAccount = () => {
    exit();
    router.push('/account');
  };

  return (
    <SC.ModalContainer onClose={exit} open={open}>
      <SC.Container>
        <SC.PersonalData onClick={handleProfile}>
          <SC.AvatarBlock>
            <Avatar size={AVATAR_SIZE} />
          </SC.AvatarBlock>
          <SC.InfoBlock>
            <SC.Username>
              {first_name} {second_name}
            </SC.Username>
            <SC.Email>{email}</SC.Email>
          </SC.InfoBlock>
        </SC.PersonalData>
        <SC.ItemTab onClick={handleAccount}>
          <Image src='/images/account.svg' alt='account icon' height={ICON_SIZE} width={ICON_SIZE} />
          <SC.ItemName>{t('main.account')}</SC.ItemName>
        </SC.ItemTab>
        <SC.ItemTab disabled>
          <Image src='/images/plusBlack.svg' alt='plus icon' height={ICON_SIZE} width={ICON_SIZE} />
          <SC.ItemName>{t('main.addCompany')}</SC.ItemName>
        </SC.ItemTab>
        <Image src='/images/line.svg' alt='line icon' height={LINE_HEIGHT} width={LINE_WIDTH} />
        <SC.ItemTab disabled>
          <Image src='/images/bell.svg' alt='bell icon' height={ICON_SIZE} width={ICON_SIZE} />
          <SC.ItemName>{t('main.notification')}</SC.ItemName>
        </SC.ItemTab>
        <SC.ItemTab disabled>
          <Image src='/images/chatCircle.svg' alt='chatCircle icon' height={ICON_SIZE} width={ICON_SIZE} />
          <SC.ItemName>{t('main.messages')}</SC.ItemName>
        </SC.ItemTab>
        <Image src='/images/line.svg' alt='line icon' height={LINE_HEIGHT} width={LINE_WIDTH} />
        <SC.ItemTab disabled>
          <Image src='/images/settings.svg' alt='settings icon' height={ICON_SIZE} width={ICON_SIZE} />
          <SC.ItemName>{t('main.settings')}</SC.ItemName>
        </SC.ItemTab>
        <SC.ItemTab disabled>
          <Image src='/images/circleWarning.svg' alt='warning icon' height={ICON_SIZE} width={ICON_SIZE} />
          <SC.ItemName>{t('main.reportError')}</SC.ItemName>
        </SC.ItemTab>
        <SC.ItemTab onClick={handleLogout}>
          <Image src='/images/logout.svg' alt='logout icon' height={ICON_SIZE} width={ICON_SIZE} />
          <SC.ItemName>{t('main.logout')}</SC.ItemName>
        </SC.ItemTab>
      </SC.Container>
    </SC.ModalContainer>
  );
};

export default ProfilePopup;
