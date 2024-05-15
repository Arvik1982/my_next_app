'use client';
import * as SC from './ChangingPrimaryEmail.style';
import * as GSC from '../../AuthenticationServiceGlobal.style';
import Image from 'next/image';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import LoginSecurityWindow from '@/app/components/ui/LoginSecurityWindow/LoginSecurityWindow';
import InputPassword from '@/app/components/ui/InputPassword/InputPassword';
import { Button } from '@/app/components';
import { ChangingPrimaryEmailProps, FormValues } from './ChangingPrimaryEmail.type';
import { useTranslation } from 'react-i18next';
import InputRegister from '@/app/components/ui/InputRegister/InputRegister';
import { useAppDispatch } from '@/lib/storeHooks';
import { changeEmail } from '@/lib/store/authSlice/authSlice';
import { IChangeEmail } from '@/lib/store/types';

const ChangingPrimaryEmail: FC<ChangingPrimaryEmailProps> = ({ exit, open, extend, setNewEmail }) => {
  const { t } = useTranslation();
  const [showPrompt, setShowPrompt] = useState(false);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>();
  const ICON_SIZE = 20;

  const updateEmail = async (queryParam: IChangeEmail) => {
    try {
      await dispatch(changeEmail(queryParam)).unwrap();
      setNewEmail(queryParam.new_email);
      extend();
    } catch (error) {
      if ((error as Error).message === '400') {
        setError('password', {
          message: t('auth.invalidPassword'),
        });
      } else {
        console.error((error as Error).message);
      }
    }
  };

  const onSubmit: SubmitHandler<FormValues> = ({ email, password }) => {
    const queryParam = {
      new_email: email,
      password,
    };
    updateEmail(queryParam);
  };

  const onClickPrompt = () => {
    setShowPrompt(!showPrompt);
  };
  return (
    <LoginSecurityWindow exit={exit} open={open}>
      <SC.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <GSC.Title>{t('authorization.changeEmailTitle')}</GSC.Title>
        <SC.InputWrapper>
          <SC.TextRecommendation>{t('authorization.changeEmailNotice')}</SC.TextRecommendation>
          <SC.InputLabel>{t('authorization.newEmail')}</SC.InputLabel>
          <InputRegister
            type={'email'}
            register={register('email', {
              required: true,
            })}
            err={Boolean(errors.email)}
          />
          {errors?.email && <GSC.Error>{errors.email.message}</GSC.Error>}
        </SC.InputWrapper>
        <SC.InputWrapper>
          <SC.VectorWrapper>
            <SC.TextRecommendation>{t('authorization.enterCurrentPass')}</SC.TextRecommendation>
            <GSC.PromptWrapper>
              <Image
                onClick={onClickPrompt}
                src={'/images/vector.svg'}
                alt={'vector'}
                width={ICON_SIZE}
                height={ICON_SIZE}
              />
              {showPrompt && (
                <GSC.PromptSecurity>
                  {t('authorization.warning')}
                  {t('authorization.recommendations')}
                  <a href={'#'}>{t('authorization.protectLink')}</a>
                </GSC.PromptSecurity>
              )}
            </GSC.PromptWrapper>
          </SC.VectorWrapper>
          <InputPassword
            label={t('authorization.currentPass')}
            register={register('password', {
              required: true,
              minLength: {
                value: 8,
                message: t('authorization.min8Characters'),
              },
            })}
            error={!!errors.password}
            errorText={errors.password?.message}
          />
        </SC.InputWrapper>
        <GSC.ButtonBlock>
          <Button fullWidth type={'submit'}>
            <GSC.ButtonText>{t('authorization.continue')}</GSC.ButtonText>
          </Button>
        </GSC.ButtonBlock>
      </SC.FormContainer>
    </LoginSecurityWindow>
  );
};

export default ChangingPrimaryEmail;
