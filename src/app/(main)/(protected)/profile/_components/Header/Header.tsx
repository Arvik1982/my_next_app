'use client';

import { FC, useEffect, useState } from 'react';
import * as SC from './Header.style';
import Image from 'next/image';
import { Avatar, SplitButtonGroup } from '@/app/components';
import { useTranslation } from 'react-i18next';
import { setOpen, setPage } from '@/lib/store/profileEditSlice/profileEditSlice';
import { useAppDispatch, useAppSelector } from '@/lib/storeHooks';
import { isVideoFile } from '@/utils/utils';
import { ExpertMarkWithPopup } from '@/app/(main)/specialists/_components/ExpertMarkWithPopup/ExpertMarkWithPopup';
import { ReadyToWorkMark } from '../ReadyToWorkPopup/ReadyToWorkMark';
import { ISpecialists } from '@/lib/store/types';

interface HeaderProps {
  specialist: ISpecialists | null;
}

const PLACE = 'Москва';
const POST = 'Дизайнер продукта';
const isEXPERT = true;

const Header: FC<HeaderProps> = ({ specialist }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const ICON_SIZE = 24;
  const COVER_SIZE = 2000;
  const AVATAR_SIZE = 110;
  const fullName = `${user?.first_name} ${user?.second_name}`;

  const headerName = `${t('profile.headerName', { name: fullName })}`;
  const headerPlace = `${t('profile.headerPlace', { place: PLACE })}`;
  const headerPost = `${t('profile.headerPost', { post: POST })}`;
  const PROJECTS = `${t('profile.projects')}`;
  const POSTS = `${t('profile.posts')}`;
  const EVENTS = `${t('profile.events')}`;
  const REVIEWS = `${t('profile.reviews')}`;

  const [activeButton, setActiveButton] = useState(PROJECTS);
  const [isVideoCover, setIsVideoCover] = useState(false);

  const onClickButton = (i: string) => {
    setActiveButton(i);
  };

  const openEditPage = () => {
    dispatch(setPage('main'));
    dispatch(setOpen(true));
  };

  useEffect(() => {
    if (user?.profile_cover) {
      const coverIsVideo = isVideoFile(user.profile_cover);
      setIsVideoCover(coverIsVideo);
    }
  }, [user?.profile_cover]);

  return (
    <SC.Container>
      {user?.profile_cover ? (
        isVideoCover ? (
          <SC.Video src={`${user.profile_cover}`} width={COVER_SIZE} height={COVER_SIZE} autoPlay={true} loop />
        ) : (
          <SC.CoverImg src={`${user.profile_cover}`} alt='cover' width={COVER_SIZE} height={COVER_SIZE} />
        )
      ) : (
        <SC.EmptyCover />
      )}
      <SC.AvatarBlock>
        <SC.Avatar>
          <Avatar size={AVATAR_SIZE} />
        </SC.Avatar>
        <SC.NameBlock>
          <SC.MarksContainter>
            <SC.Name>{headerName}</SC.Name>
            {isEXPERT && specialist && <ExpertMarkWithPopup specialist={specialist} />}
            {!user?.work_status && <ReadyToWorkMark work_status={user?.work_status} />}
          </SC.MarksContainter>
          <SC.Info>
            <SC.Post>{headerPost}</SC.Post>
            <span>{headerPlace}</span>
          </SC.Info>
        </SC.NameBlock>
      </SC.AvatarBlock>
      <SC.ControlBlock>
        <SplitButtonGroup
          nameButton={[PROJECTS, POSTS, EVENTS, REVIEWS]}
          activeButton={activeButton}
          onClickButton={onClickButton}
        />
        <SC.Buttons>
          <SC.ButtonEtc src={'/images/3-points.svg'} width={ICON_SIZE} height={ICON_SIZE} alt='etc' />
          <SC.RedactorBtn onClick={openEditPage}>
            <Image src={'/images/edit-pencil.svg'} width={ICON_SIZE} height={ICON_SIZE} alt='edit pencil' />
            <SC.RedactorText>{t('profile.redactor')}</SC.RedactorText>
          </SC.RedactorBtn>
        </SC.Buttons>
      </SC.ControlBlock>
    </SC.Container>
  );
};

export default Header;
