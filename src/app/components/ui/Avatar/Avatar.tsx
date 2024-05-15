'use client';
import React, { FC, useEffect, useState } from 'react';
import * as SC from './Avatar.style';
import { useAppSelector } from '@/lib/storeHooks';
import { isVideoFile } from '@/utils/utils';
import { ISpecialists } from '@/lib/store/types';

interface PropsAvatar {
  onClick?: () => void;
  size: number;
  specialist?: ISpecialists;
}

const Avatar: FC<PropsAvatar> = ({ size, specialist, ...props }) => {
  const myProfile = useAppSelector((state) => state.auth.user);
  const user = specialist || myProfile;
  const initials = user ? `${user?.first_name?.charAt(0)}${user?.second_name?.charAt(0)}` : '';
  const [isVideoAvatar, setIsVideoAvatar] = useState(false);

  useEffect(() => {
    if (user?.photo) {
      const avatarIsVideo = isVideoFile(user.photo);
      setIsVideoAvatar(avatarIsVideo);
    }
  }, [user?.photo]);

  return (
    <SC.Avatar {...props}>
      {user?.photo ? (
        isVideoAvatar ? (
          <SC.Video src={`${user.photo}`} width={size} height={size} autoPlay={true} loop />
        ) : (
          <SC.Img src={`${user.photo}`} alt='avatar' width={size} height={size} />
        )
      ) : (
        <SC.AvatarText>{initials}</SC.AvatarText>
      )}
    </SC.Avatar>
  );
};

export default Avatar;
