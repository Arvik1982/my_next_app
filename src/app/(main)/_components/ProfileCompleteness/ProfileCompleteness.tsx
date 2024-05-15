'use client';

import { setPage } from '@/lib/store/profileEditSlice/profileEditSlice';
import * as SC from './ProfileCompleteness.style';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@/lib/storeHooks';
import { useState } from 'react';
import DeleteAccount from '../../(protected)/profile/security/AuthenticationService/DeleteAccount/DeleteAccount';
import ConfirmationDelete from '../../(protected)/profile/security/AuthenticationService/ConfirmationDelete/ConfirmationDelete';

interface Props {
  mainPercentage: number;
  contactsPercentage: number;
  experiencePercentage: number;
  educationPercentage: number;
  mentorshipPercentage: number;
}

interface Item {
  title: string;
  src: string;
  percent?: string | JSX.Element;
  pageName: string;
}

const ProfileCompleteness = ({
  mainPercentage,
  contactsPercentage,
  experiencePercentage,
  educationPercentage,
  mentorshipPercentage,
}: Props) => {
  const iconSize = 24;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const selectedPage = useAppSelector((state) => state.profileEditPage.page);
  const [openWindow, setOpenWindow] = useState('');
  const getPercent = (percent: number) => {
    return percent === 100 ? (
      <Image src='/images/check-2.svg' alt='complete' width={iconSize} height={iconSize} />
    ) : (
      `${percent || 0}%`
    );
  };

  const mainItemList = [
    {
      title: t('main.main'),
      src: `/images/${selectedPage === 'main' ? 'user-violet' : 'user'}.svg`,
      percent: getPercent(mainPercentage),
      pageName: 'main',
    },
    {
      title: t('main.contacts'),
      src: `/images/${selectedPage === 'contacts' ? 'user-card-violet' : 'user-card'}.svg`,
      percent: getPercent(contactsPercentage),
      pageName: 'contacts',
    },
    {
      title: t('main.experience'),
      src: `/images/${selectedPage === 'experience' ? 'suitcase-violet' : 'suitcase'}.svg`,
      percent: getPercent(experiencePercentage),
      pageName: 'experience',
    },
    {
      title: t('main.education'),
      src: `/images/${selectedPage === 'education' ? 'building-violet' : 'building'}.svg`,
      percent: getPercent(educationPercentage),
      pageName: 'education',
    },
  ];
  const bottomItemsList = [
    {
      title: t('main.mentoring'),
      src: `/images/${selectedPage === 'mentoring' ? 'wavy-check-violet' : 'wavy-check'}.svg`,
      percent: getPercent(mentorshipPercentage),
      pageName: 'mentoring',
    },
    {
      title: t('main.entryAndSecurity'),
      src: `/images/${selectedPage === 'entry_and_security' ? 'shield-violet' : 'shield'}.svg`,
      pageName: 'entry_and_security',
    },
    {
      title: t('main.deleteAcc'),
      src: `/images/basket-red.svg`,
      pageName: 'entry_and_security',
    },
  ];

  const openDeleteAccount = () => {
    setOpenWindow('DeleteAccount');
  };

  const openConfirmationDelete = () => {
    setOpenWindow('ConfirmationDelete');
  };

  const closeWindow = () => {
    setOpenWindow('');
  };

  const handleClick = (item: Item) => {
    if (item.title === t('main.deleteAcc')) {
      openDeleteAccount();
    } else {
      dispatch(setPage(item.pageName));
    }
  };

  const resend = () => {};

  return (
    <SC.Container>
      <SC.ItemsBlock>
        {mainItemList.map((item) => (
          <SC.StyledListItem key={item.title} secondaryAction={<SC.Text secondary={item.percent} />}>
            <SC.ContainerBtn onClick={() => handleClick(item)}>
              <SC.Logo>
                <Image src={item.src} alt={item.title} width={iconSize} height={iconSize} />
              </SC.Logo>
              <SC.Text primary={item.title} />
            </SC.ContainerBtn>
          </SC.StyledListItem>
        ))}
      </SC.ItemsBlock>
      <SC.ItemsBlock>
        {bottomItemsList.map((item, i, self) => (
          <SC.StyledListItem key={item.title} secondaryAction={item.percent && <SC.Text secondary={item.percent} />}>
            <SC.ContainerBtn onClick={() => handleClick(item)}>
              <SC.Logo>
                <Image src={item.src} alt={item.title} width={iconSize} height={iconSize} />
              </SC.Logo>
              <SC.Text primary={item.title} isLast={self.length - 1 === i} />
            </SC.ContainerBtn>
          </SC.StyledListItem>
        ))}
      </SC.ItemsBlock>
      <DeleteAccount open={openWindow === 'DeleteAccount'} exit={closeWindow} extend={openConfirmationDelete} />
      <ConfirmationDelete open={openWindow === 'ConfirmationDelete'} exit={closeWindow} resend={resend} />
    </SC.Container>
  );
};

export default ProfileCompleteness;
