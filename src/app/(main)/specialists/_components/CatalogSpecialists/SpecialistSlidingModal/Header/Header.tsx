'use client';

import React, { FC, useState } from 'react';
import * as SC from './Header.style';
import { Avatar, SplitButtonGroup } from '@/app/components';
import ContactButton from '@/app/components/ui/ContactButton/ContactButton';
import { Props } from './Header.type';
import { useTranslation } from 'react-i18next';
import { ExpertMarkWithPopup } from '../../../ExpertMarkWithPopup/ExpertMarkWithPopup';
import { useAppDispatch } from '@/lib/storeHooks';
// import { changeFavoriteCard } from '@/lib/store/filterSpecialistsSlice/specialistsSlice';

const PRICE = 1000;
const isEXPERT = true;
const LOCATION = 'Москва';
const isFAVORIVE = true;
const CURRENCY = '₽';

const Header: FC<Props> = ({ specialist, openContactsModal }) => {
  const { first_name, second_name, specialization } = specialist;
  const { specializations } = specialization;
  const { name: specializationName } = specializations[0];
  const fullName = `${first_name} ${second_name}`;
  const { t } = useTranslation();
  const PROJECTS = `${t('profile.projects')}`;
  const POSTS = `${t('profile.posts')}`;
  const EVENTS = `${t('profile.events')}`;
  const REVIEWS = `${t('profile.reviews')}`;
  const ICON_SIZE = 24;
  const AVATAR_SIZE = 110;
  const [activeButton, setActiveButton] = useState(PROJECTS);
  const cost = Intl.NumberFormat('ru-RU').format(PRICE);
  const dispatch = useAppDispatch();
  const onClickButton = (i: string) => {
    setActiveButton(i);
  };
  const toggleFavorite = () => {
    // dispatch(changeFavoriteCard(id));
  };
  return (
    <SC.Container>
      <SC.CoverImg />
      <SC.AvatarBlock>
        <SC.AvatarContainer>
          <Avatar size={AVATAR_SIZE} specialist={specialist} />
        </SC.AvatarContainer>
        <SC.NameBlock>
          <SC.NameWrapper>
            <SC.Name>{fullName}</SC.Name>
            {isEXPERT && <ExpertMarkWithPopup specialist={specialist} />}
            <SC.Ready>Ищу работу</SC.Ready>
          </SC.NameWrapper>
          <SC.Info>
            <SC.DescriptionText>{specializationName}</SC.DescriptionText>
            <SC.DescriptionText>{LOCATION}</SC.DescriptionText>
            <SC.DescriptionText>Опыт 6 лет</SC.DescriptionText>
            <SC.DescriptionText>{t('specialists.costPerHour', { currency: CURRENCY, cost })}</SC.DescriptionText>
          </SC.Info>
        </SC.NameBlock>
      </SC.AvatarBlock>
      <SC.ControlBlock>
        <SplitButtonGroup
          disabled={['', 'Статьи', 'Мероприятия', 'Отзывы']}
          nameButton={[PROJECTS, POSTS, EVENTS, REVIEWS]}
          activeButton={activeButton}
          onClickButton={onClickButton}
        />
        <SC.Buttons>
          <SC.ButtonEtc src='/images/3-points.svg' width={ICON_SIZE} height={ICON_SIZE} alt='etc' />
          <SC.ButtonBookmark
            onClick={toggleFavorite}
            src={`${isFAVORIVE ? 'images/bookmarkactive.svg' : 'images/bookmark.svg'}`}
            width={ICON_SIZE}
            height={ICON_SIZE}
            alt='bookmark'
          />
          <ContactButton clickContactButton={openContactsModal} />
        </SC.Buttons>
      </SC.ControlBlock>
    </SC.Container>
  );
};

export default Header;
