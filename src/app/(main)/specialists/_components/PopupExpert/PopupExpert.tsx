'use client';
import React, { ChangeEvent, FC, useState } from 'react';
import Modal from '@mui/material/Modal';
import * as SC from './PopupExpert.style';
import Image from 'next/image';
import ContactButton from '@/app/components/ui/ContactButton/ContactButton';
import { Props } from './PopupExpert.type';
import { useTranslation } from 'react-i18next';

const PRICE = 1000;
const LOCATION = 'Москва';
const EXPERIENCE = 3;
const PopupExpert: FC<Props> = ({ specialist, openPopup, closePopup }) => {
  const { first_name, second_name, specialization } = specialist;
  const { specializations } = specialization;
  const { name: specializationName } = specializations[0];
  const fullName = `${first_name} ${second_name}`;
  const { t } = useTranslation();
  const [contact, setContact] = useState(false);
  const [valueInput, setValueInput] = useState(t('specialists.greeting'));
  const CHECK_SIZE = 12;
  const EXIT_SIZE = 24;
  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.currentTarget.value);
  };
  const clickContactButton = () => {
    setContact(true);
  };

  return (
    <Modal open={openPopup} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
      <SC.Container>
        <SC.Exit onClick={closePopup} src={'/images/exit.svg'} width={EXIT_SIZE} height={EXIT_SIZE} alt={'exit'} />
        <SC.ExpertText>{t('specialists.expert')}</SC.ExpertText>
        <SC.UserInfoText>
          <SC.ProfileContainer>
            <SC.Name>{fullName}</SC.Name>
            <SC.Expert>
              <Image src={'/images/check.svg'} alt={'check'} width={CHECK_SIZE} height={CHECK_SIZE} />
              <SC.TextWrapper>{t('specialists.expert')}</SC.TextWrapper>
            </SC.Expert>
            <SC.Ready>Ищу работу</SC.Ready>
          </SC.ProfileContainer>
          <SC.AboutProductWrapper>
            <SC.DescriptionText>{specializationName}</SC.DescriptionText>
            <SC.DescriptionText>{LOCATION}</SC.DescriptionText>
            <SC.DescriptionText>{t('specialists.experience', { experience: EXPERIENCE })}</SC.DescriptionText>
          </SC.AboutProductWrapper>
        </SC.UserInfoText>
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
        {!contact ? (
          <SC.ContactPrice>
            <SC.PriceContainer>
              <SC.Price>{t('specialists.cost')}</SC.Price>
              <SC.PriceValue>
                {Intl.NumberFormat('ru-RU').format(PRICE)}
                {t('specialists.perHour')}
              </SC.PriceValue>
              <SC.FirstMeet>{t('specialists.firstMeet')}</SC.FirstMeet>
            </SC.PriceContainer>
            <ContactButton clickContactButton={clickContactButton} />
          </SC.ContactPrice>
        ) : (
          <SC.ContactContainer>
            <SC.ContactPriceContainer>
              <div>
                <SC.Price>{t('specialists.cost')}</SC.Price>
                <SC.PriceValue>
                  {Intl.NumberFormat('ru-RU').format(PRICE)}
                  {t('specialists.perHour')}
                </SC.PriceValue>
              </div>
              <SC.FirstMeet>{t('specialists.firstMeet')}</SC.FirstMeet>
            </SC.ContactPriceContainer>
            <SC.Input
              onChange={changeInput}
              multiline
              id='outlined-basic'
              autoFocus
              value={valueInput}
              variant='outlined'
            />
            <SC.SendMessage disableRipple>
              <SC.TextSendMessage>{t('specialists.sendMessage')}</SC.TextSendMessage>
            </SC.SendMessage>
          </SC.ContactContainer>
        )}
      </SC.Container>
    </Modal>
  );
};

export default PopupExpert;
