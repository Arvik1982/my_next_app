'use client';
import * as SC from './DeleteAccount.style';
import { Button, LoginSecurityWindow } from '@/app/components';
import Image from 'next/image';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { BpCheckedIcon, BpIcon } from './DeleteAccount.style';
import { FC } from 'react';
import { PropsDeleteAccount } from './DeleteAccount.type';
import * as GSC from '../AuthenticationServiceGlobal.style';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/lib/storeHooks';

const DeleteAccount: FC<PropsDeleteAccount> = ({ exit, open, extend }) => {
  const { t } = useTranslation();
  const user = useAppSelector((state) => state.auth.user);
  const ICON_SIZE = 44;
  return (
    <LoginSecurityWindow open={open} exit={exit}>
      <SC.Container>
        <GSC.Title>{t('authentication.deleteAccountTitle')}</GSC.Title>
        <SC.Text>{t('authentication.deleteAccountText')}</SC.Text>
        <SC.Text>{t('authentication.letterToEmail')}</SC.Text>
        <SC.Text>{t('authentication.availableAuth')}</SC.Text>
        <FormControl>
          <RadioGroup aria-labelledby='demo-radio-buttons-group-label' defaultValue='email' name='radio-buttons-group'>
            <SC.RadioGroupWrapper>
              <SC.SocialContainer>
                <SC.NetworkWrapper>
                  <Image src={'/images/email.svg'} alt={'email'} width={ICON_SIZE} height={ICON_SIZE} />
                  <div>
                    <SC.LabelEmail>{t('authentication.email')}</SC.LabelEmail>
                    <SC.Email>{user?.email}</SC.Email>
                  </div>
                </SC.NetworkWrapper>
                <FormControlLabel
                  value='email'
                  control={<Radio disableRipple color='default' checkedIcon={<BpCheckedIcon />} icon={<BpIcon />} />}
                  label=''
                />
              </SC.SocialContainer>
              <SC.Disablet>
                <SC.SocialContainer>
                  <SC.NetworkWrapper>
                    <Image src={'/images/vk.svg'} alt={'vk'} width={ICON_SIZE} height={ICON_SIZE} />
                    <SC.TitleSocialNetwork>{t('authentication.authVk')}</SC.TitleSocialNetwork>
                  </SC.NetworkWrapper>
                  <FormControlLabel
                    value='vkontakte'
                    control={<Radio disableRipple color='default' checkedIcon={<BpCheckedIcon />} icon={<BpIcon />} />}
                    label=''
                    disabled
                  />
                </SC.SocialContainer>
              </SC.Disablet>
              <SC.Disablet>
                <SC.SocialContainer>
                  <SC.NetworkWrapper>
                    <Image src={'/images/gosuslugiColor.svg'} alt={'gosuslugi'} width={ICON_SIZE} height={ICON_SIZE} />
                    <SC.TitleSocialNetwork>{t('authentication.authGosuslugi')}</SC.TitleSocialNetwork>
                  </SC.NetworkWrapper>
                  <FormControlLabel
                    value='gosuslugi'
                    control={<Radio disableRipple color='default' checkedIcon={<BpCheckedIcon />} icon={<BpIcon />} />}
                    label=''
                    disabled
                  />
                </SC.SocialContainer>
              </SC.Disablet>
            </SC.RadioGroupWrapper>
          </RadioGroup>
        </FormControl>
        <GSC.ButtonBlock>
          <Button fullWidth onClick={extend}>
            <GSC.ButtonText>{t('authentication.continue')}</GSC.ButtonText>
          </Button>
        </GSC.ButtonBlock>
      </SC.Container>
    </LoginSecurityWindow>
  );
};

export default DeleteAccount;
