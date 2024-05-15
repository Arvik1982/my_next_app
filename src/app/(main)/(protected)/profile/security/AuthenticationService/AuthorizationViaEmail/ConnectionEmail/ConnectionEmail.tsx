'use client';
import React, { FC } from 'react';
import LoginSecurityWindow from '@/app/components/ui/LoginSecurityWindow/LoginSecurityWindow';
import * as SC from './ConnectionEmail.style';
import * as GSC from '../../AuthenticationServiceGlobal.style';
import { Button } from '@/app/components';
import InputPassword from '@/app/components/ui/InputPassword/InputPassword';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ConnectionEmailProps, FormValues } from './ConnectionEmail.type';
import { useTranslation } from 'react-i18next';

const ConnectionEmail: FC<ConnectionEmailProps> = ({ exit, open }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = () => {};
  return (
    <LoginSecurityWindow open={open} exit={exit}>
      <SC.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <GSC.Title>{t('authorization.connectionEmailTitle')}</GSC.Title>
        <SC.InputWrapper>
          <SC.Recommendation>{t('authorization.changeEmailNotice')}</SC.Recommendation>
          <SC.InputEmailContainer>
            <SC.CustomTextField {...register('email')} id='outlined-basic' type={'text'} variant='outlined' />
          </SC.InputEmailContainer>
        </SC.InputWrapper>
        <SC.InputWrapper>
          <SC.Recommendation>{t('authorization.confirmNewPassNotice')}</SC.Recommendation>
          <InputPassword
            register={register('newPassword')}
            label={t('authorization.newPass')}
            error={!!errors.newPassword}
          />
        </SC.InputWrapper>
        <InputPassword
          register={register('confirmNewPassword')}
          label={t('authorization.confirmNewPass')}
          error={!!errors.confirmNewPassword}
        />
        <Button fullWidth type={'submit'}>
          <GSC.ButtonText>{t('authorization.continue')}</GSC.ButtonText>
        </Button>
      </SC.FormContainer>
    </LoginSecurityWindow>
  );
};

export default ConnectionEmail;
