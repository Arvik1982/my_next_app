import React, { FC, useState } from 'react';
import LoginSecurityWindow from '@/app/components/ui/LoginSecurityWindow/LoginSecurityWindow';
import * as SC from './NewPassword.style';
import * as GSC from '../../AuthenticationServiceGlobal.style';
import { Button } from '@/app/components';
import InputPassword from '@/app/components/ui/InputPassword/InputPassword';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NewPasswordFormValues, NewPasswordProps } from './NewPassword.type';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { useAppDispatch } from '@/lib/storeHooks';
import { resetPassword } from '@/lib/store/authSlice/authSlice';
import { useRouter } from 'next/navigation';

const NewPassword: FC<NewPasswordProps> = ({ exit, open, params }) => {
  const [showPrompt, setShowPrompt] = useState(false);
  const ICON_SIZE = 20;
  const { code } = params;
  const router = useRouter();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<NewPasswordFormValues>();

  const onSubmit: SubmitHandler<NewPasswordFormValues> = async (data: NewPasswordFormValues) => {
    try {
      await dispatch(
        resetPassword({
          verification_code: code,
          confirm_new_password: data.confirmPassword,
          new_password: data.password,
        }),
      ).unwrap();
      exit();
      router.push('/profile');
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const onClickPrompt = () => {
    setShowPrompt(!showPrompt);
  };
  return (
    <LoginSecurityWindow open={open} exit={exit}>
      <SC.Container onSubmit={handleSubmit(onSubmit)}>
        <GSC.Title>{t('authorization.enterNewPass')}</GSC.Title>
        <div>
          <SC.RecomendationBlock>
            <SC.Recomendation>{t('authorization.confirmNewPassNotice')}</SC.Recomendation>
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
          </SC.RecomendationBlock>
          <InputPassword
            label={t('authorization.newPass')}
            register={register('password', {
              required: true,
              minLength: {
                value: 8,
                message: 'Минимум 8 символов',
              },
            })}
            errorText={errors.password?.message}
            error={!!errors.password}
          />
        </div>
        <InputPassword
          label={t('authorization.confirmNewPass')}
          register={register('confirmPassword', {
            required: true,
            minLength: {
              value: 8,
              message: 'Минимум 8 символов',
            },
            validate: (value) => {
              if (value !== watch('password')) {
                return 'Пароль не совпадает';
              }
            },
          })}
          errorText={errors.confirmPassword?.message}
          error={!!errors.confirmPassword}
        />
        <GSC.ButtonBlock>
          <Button fullWidth type={'submit'}>
            <GSC.ButtonText>{t('authorization.continue')}</GSC.ButtonText>
          </Button>
        </GSC.ButtonBlock>
        <SC.CheckboxWrapper>
          <SC.Check disableRipple {...register('exit')} />
          <SC.CheckboxText>{t('authorization.logOutAll')}</SC.CheckboxText>
        </SC.CheckboxWrapper>
      </SC.Container>
    </LoginSecurityWindow>
  );
};

export default NewPassword;
