'use client';
import * as SC from './SpecialistCard.style';
import React, { FC, useEffect, useRef, useState } from 'react';
import { SpecialistCardProps } from './SpecialistCardTypes';
import { Avatar, Button } from '@/app/components';
import SpecialistSlidingModal from '@/app/(main)/specialists/_components/CatalogSpecialists/SpecialistSlidingModal/SpecialistSlidingModal';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/lib/storeHooks';
// import { changeFavoriteCard } from '@/lib/store/filterSpecialistsSlice/specialistsSlice';
import { ExpertMarkWithPopup } from '../../ExpertMarkWithPopup/ExpertMarkWithPopup';
import ContactsModal from '@/app/(main)/(protected)/profile/ProfileInfoModal/ContactsModal/ContactsModal';
import { BookmarkButton } from '@/app/(main)/_components/BookmarkButton/BookmarkButton';
import { translateStatusIntoRus } from '@/utils/utils';

const PRICE = 1000;
const COMMENTS = 2;
const isEXPERT = true;
const isFAVORIVE = true;
const CURRENCY = '₽';

const SpecialistCard: FC<SpecialistCardProps> = ({ searchedText, specialist }) => {
  const { first_name, second_name, specialization } = specialist;
  const { specializations, status } = specialization;
  const { name: specializationName } = specializations[0];
  const fullName = `${first_name} ${second_name}`;
  const dispatch = useAppDispatch();
  const AVATAR_SIZE = 48;
  const PROJECT_CARD_WIDTH = 100;
  const PROJECT_CARD_HEIGHT = 100;
  const { t } = useTranslation();
  function numWord(value: number, words: string[]) {
    value = Math.abs(value) % 100;
    const num = value % 10;
    if (value > 10 && value < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num == 1) return words[0];
    return words[2];
  }
  const cost = Intl.NumberFormat('ru-RU').format(PRICE);
  const declination = numWord(COMMENTS, ['Отзыв', 'Отзыва', 'Отзывов']);
  const [openSpecialistSlidingModal, setOpenSpecialistSlidingModal] = useState(false);
  const [openWindow, setOpenWindow] = useState('');

  const openContactsModal = () => {
    setOpenWindow('ContactsModal');
  };
  const closeModalWindow = () => {
    setOpenWindow('');
  };
  const openSpecialistModal = () => {
    setOpenSpecialistSlidingModal(true);
  };
  const handleClose = () => {
    setOpenSpecialistSlidingModal(false);
  };

  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = searchedText
        ? fullName.replaceAll(
            new RegExp(searchedText, 'gi'),
            (p) => `<mark style="color: #00a85a; background-color: #00a85a1f">${p}</mark>`,
          )
        : fullName;
    }
  }, [searchedText, fullName]);

  const bookmarkClickHandler = () => {
    // dispatch(changeFavoriteCard(id));
  };

  return (
    <SC.CardContainer>
      <SC.CardWrapper>
        <SC.User>
          <SC.UserInfo>
            <SC.AvatarContainer>
              <Avatar size={AVATAR_SIZE} onClick={openSpecialistModal} specialist={specialist} />
            </SC.AvatarContainer>
            <SC.ProfileInfo>
              <SC.ProfileContainer>
                <SC.Name ref={ref} onClick={openSpecialistModal}>
                  {fullName}
                </SC.Name>
                {isEXPERT && <ExpertMarkWithPopup specialist={specialist} />}
                {<SC.Ready>{translateStatusIntoRus(status)}</SC.Ready>}
              </SC.ProfileContainer>
              <SC.AboutProductWrapper>
                <SC.DescriptionText>{specializationName}</SC.DescriptionText>
                <SC.DescriptionText>
                  {declination} {COMMENTS}
                </SC.DescriptionText>
                <SC.DescriptionText>{t('specialists.costPerHour', { currency: CURRENCY, cost })}</SC.DescriptionText>
              </SC.AboutProductWrapper>
            </SC.ProfileInfo>
          </SC.UserInfo>
          <SC.NavigationButtons>
            <BookmarkButton onClick={bookmarkClickHandler} active={isFAVORIVE} />
            <Button onClick={openContactsModal}>
              <SC.ButtonText>{t('specialists.contact')}</SC.ButtonText>
            </Button>
          </SC.NavigationButtons>
        </SC.User>
        <SC.Projects>
          {/* {projects.map((i) => {
            return (
              <SC.ProjectCard
                key={i.id}
                src={i.src}
                alt={'project'}
                width={PROJECT_CARD_WIDTH}
                height={PROJECT_CARD_HEIGHT}
              />
            );
          })} */}
        </SC.Projects>
      </SC.CardWrapper>
      {openSpecialistSlidingModal && (
        <SpecialistSlidingModal
          specialist={specialist}
          openModal={openSpecialistSlidingModal}
          handleClose={handleClose}
        />
      )}
      <ContactsModal specialist={specialist} exit={closeModalWindow} open={openWindow === 'ContactsModal'} />
    </SC.CardContainer>
  );
};

export default SpecialistCard;
