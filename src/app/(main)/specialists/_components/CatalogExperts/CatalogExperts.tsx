'use client';
import React, { FC, useState } from 'react';
import * as SC from './CatalogExperts.style';
import { Props } from './CatalogExperts.type';
import { Avatar, Button } from '@/app/components';
import { useTranslation } from 'react-i18next';
import { ExpertMarkWithPopup } from '../ExpertMarkWithPopup/ExpertMarkWithPopup';
import SpecialistSlidingModal from '../CatalogSpecialists/SpecialistSlidingModal/SpecialistSlidingModal';

const PRICE = 1000;
const LOCATION = 'Москва';

const CatalogExperts: FC<Props> = ({ specialist }) => {
  const { first_name, second_name, specialization } = specialist;
  const { specializations } = specialization;
  const { name: specializationName } = specializations[0];
  const fullName = `${first_name} ${second_name}`;
  const { t } = useTranslation();
  const AVATAR_SIZE = 48;
  const [openSpecialistSlidingModal, setOpenSpecialistSlidingModal] = useState(false);

  const openSpecialistModal = () => {
    setOpenSpecialistSlidingModal(true);
  };
  const handleClose = () => {
    setOpenSpecialistSlidingModal(false);
  };

  return (
    <SC.CardContainer>
      <SC.Container>
        <SC.User>
          <SC.UserInfo>
            <SC.AvatarContainer>
              <Avatar size={AVATAR_SIZE} specialist={specialist} onClick={openSpecialistModal} />
            </SC.AvatarContainer>
            <SC.UserInfoText>
              <SC.ProfileContainer>
                <SC.Name onClick={openSpecialistModal}>{fullName}</SC.Name>
                <ExpertMarkWithPopup specialist={specialist} />
              </SC.ProfileContainer>
              <SC.AboutProductWrapper>
                <SC.DescriptionText>{specializationName}</SC.DescriptionText>
                <SC.DescriptionText>{LOCATION}</SC.DescriptionText>
                <SC.DescriptionText>Опыт 3 года</SC.DescriptionText>
              </SC.AboutProductWrapper>
            </SC.UserInfoText>
          </SC.UserInfo>
        </SC.User>
        <SC.About>
          <SC.DescriptionSkills>
            <SC.Label>{t('specialists.aboutYourself')}</SC.Label>
            {t('specialists.aboutYourselfText', { name: fullName })}
          </SC.DescriptionSkills>
          <SC.DescriptionSkills>
            <SC.Label>{t('specialists.workWith')}</SC.Label> Стажёр, Младший
          </SC.DescriptionSkills>
          <SC.DescriptionSkills>
            <SC.Label>{t('specialists.specialization')}</SC.Label>UI/UX дизайн, Продуктовый дизайн
          </SC.DescriptionSkills>
          <SC.DescriptionSkills>
            <SC.Label>{t('specialists.requests')}</SC.Label> Начало карьеры или смена профессии, Оценка
          </SC.DescriptionSkills>
          <SC.DescriptionSkills>
            <SC.Label>{t('specialists.developingSkills')}</SC.Label> UI/UX, Research, HTML5, CSS3, Дизайн интерфейсов,
            Figma, Material Design, UI, UX
          </SC.DescriptionSkills>
        </SC.About>
        <SC.ContactPrice>
          <SC.PriceContainer>
            <SC.Price>{t('specialists.cost')}</SC.Price>
            <SC.PriceValue>
              {Intl.NumberFormat('ru-RU').format(PRICE)}
              {t('specialists.perHour')}
            </SC.PriceValue>
          </SC.PriceContainer>
          <Button>
            <SC.TextButton>{t('specialists.contact')}</SC.TextButton>
          </Button>
        </SC.ContactPrice>
      </SC.Container>
      {openSpecialistSlidingModal && (
        <SpecialistSlidingModal
          specialist={specialist}
          openModal={openSpecialistSlidingModal}
          handleClose={handleClose}
        />
      )}
    </SC.CardContainer>
  );
};

export default CatalogExperts;
