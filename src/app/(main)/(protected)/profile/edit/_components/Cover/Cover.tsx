/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { ChangeEvent, useEffect, useState } from 'react';
import { Avatar } from '@/app/components';
import * as SC from './Cover.style';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@/lib/storeHooks';
import { updatePhotos } from '@/lib/store/authSlice/authSlice';
import { isVideoFile } from '@/utils/utils';

const Cover = () => {
  const ICON_SIZE = 24;
  const AVATAR_SIZE = 110;
  const COVER_SIZE = 2000;
  const { t } = useTranslation();
  const [isVideoCover, setIsVideoCover] = useState(false);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const loadAvatar = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('photo', file);
      if (user?.profile_cover) {
        formData.append('profile_cover', user.profile_cover);
      } else {
        const emptyBlob = new Blob([]);
        formData.append('profile_cover', emptyBlob);
      }
      await dispatch(updatePhotos(formData)).unwrap();
    }
  };

  const loadCover = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('profile_cover', file);
      if (user?.photo) {
        formData.append('photo', user.photo);
      } else {
        const emptyBlob = new Blob([]);
        formData.append('photo', emptyBlob);
      }
      await dispatch(updatePhotos(formData)).unwrap();
    }
  };

  useEffect(() => {
    if (user?.profile_cover) {
      const coverIsVideo = isVideoFile(user.profile_cover);
      setIsVideoCover(coverIsVideo);
    }
  }, [user?.profile_cover]);

  return (
    <SC.CoverBlock>
      <SC.AvatarBlock>
        <Avatar size={AVATAR_SIZE} />
        <SC.AvatarLoad htmlFor='loadAvatar' className={'hoverAvatarLoad'}>
          <SC.InputFile id='loadAvatar' type='file' accept='video/*,image/*' onChange={loadAvatar} />
          <SC.HoverIcon disableRipple>
            <Image src={'/images/camera.svg'} alt='camera icon' width={ICON_SIZE} height={ICON_SIZE} />
          </SC.HoverIcon>
        </SC.AvatarLoad>
      </SC.AvatarBlock>
      <SC.CoverImg>
        {user?.profile_cover &&
          (isVideoCover ? (
            <SC.Video src={`${user.profile_cover}`} width={COVER_SIZE} height={COVER_SIZE} autoPlay={true} loop />
          ) : (
            <SC.Img src={`${user.profile_cover}`} alt='cover' width={COVER_SIZE} height={COVER_SIZE} />
          ))}
        <SC.CoverLoad htmlFor='loadCover' className={'hoverCoverLoad'}>
          <SC.InputFile id='loadCover' type='file' accept='video/*,image/*' onChange={loadCover} />
          <SC.HoverButton disableRipple>
            <Image src='/images/plusBlack.svg' alt='plus' width={ICON_SIZE} height={ICON_SIZE} />
            <SC.Text>{t('edit.loadCover')}</SC.Text>
          </SC.HoverButton>
        </SC.CoverLoad>
      </SC.CoverImg>
    </SC.CoverBlock>
  );
};

export default Cover;
