import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/app/components/ui/Button/Button';
import Checkbox from '@mui/material/Checkbox';
import InputPassword from '@/app/components/ui/InputPassword/InputPassword';
import LoginSecurityWindow from '@/app/components/ui/LoginSecurityWindow/LoginSecurityWindow';
import * as SC from './ChangePassword.style';
import * as GSC from '../../AuthenticationServiceGlobal.style';
import { ChangePasswordProps, FormValues } from './ChangePassword.type';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/lib/storeHooks';
import { changePassword } from '@/lib/store/authSlice/authSlice';
import { IChangePassword } from '@/lib/store/types';

const ChangePassword: FC<ChangePasswordProps> = ({ exit, open, openForgotPassword, showNotice }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const [checked, setChecked] = useState(false);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [showPrompt, setShowPrompt] = useState(false);
  const ICON_SIZE = 20;
  const user = useAppSelector((state) => state.auth.user);

  const onClickChange = () => setChecked(!checked);
  const onClickPrompt = () => {
    setShowPrompt(!showPrompt);
  };

  const setNewPassword = async (queryParam: IChangePassword) => {
    try {
      await dispatch(changePassword(queryParam)).unwrap();
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = (passwordObj) => {
    const { password, newPassword, confirmNewPassword } = passwordObj;
    const queryParam = {
      current_password: password,
      new_password: newPassword,
      confirm_new_password: confirmNewPassword,
    };
    setNewPassword(queryParam);
    showNotice();
  };
  return (
    <LoginSecurityWindow open={open} exit={exit}>
      <SC.Form onSubmit={handleSubmit(onSubmit)}>
        <GSC.Title>{t('authorization.changePassTitle')}</GSC.Title>
        <SC.InputBlock>
          <SC.InputContent>
            <SC.TextRecommendations>{t('authorization.currentPassNotice')}</SC.TextRecommendations>
            <InputPassword
              label={t('authorization.currentPassInput')}
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
          </SC.InputContent>
        </SC.InputBlock>
        <SC.InputContent>
          <SC.RecomendationBlock>
            <SC.TextRecommendations>{t('authorization.confirmNewPassNotice')}</SC.TextRecommendations>
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
            register={register('newPassword', {
              required: true,
              minLength: {
                value: 8,
                message: t('authorization.min8Characters'),
              },
            })}
            error={!!errors.newPassword}
            errorText={errors.newPassword?.message}
          />
        </SC.InputContent>
        <SC.InputContent>
          <InputPassword
            label={t('authorization.confirmNewPass')}
            register={register('confirmNewPassword', {
              required: true,
              minLength: {
                value: 8,
                message: t('authorization.min8Characters'),
              },
              validate: (value) => {
                if (value !== watch('newPassword')) {
                  return t('authorization.passNotEqual');
                }
              },
            })}
            error={!!errors.confirmNewPassword}
            errorText={errors.confirmNewPassword?.message}
          />
        </SC.InputContent>
        <GSC.ButtonBlock>
          <Button type={'submit'} fullWidth>
            <GSC.ButtonText>{t('authorization.continue')}</GSC.ButtonText>
          </Button>
          <GSC.WhiteButton>
            <Button fullWidth onClick={() => openForgotPassword(user?.email)}>
              <SC.ForgotPassword>{t('authorization.forgotPass')}</SC.ForgotPassword>
            </Button>
          </GSC.WhiteButton>
        </GSC.ButtonBlock>
        <SC.CheckboxContainer>
          <Checkbox checked={checked} onClick={onClickChange} disableRipple {...register('logOutAll')} />
          <p>{t('authorization.logOutAll')}</p>
        </SC.CheckboxContainer>
      </SC.Form>
    </LoginSecurityWindow>
  );
};

export default ChangePassword;
