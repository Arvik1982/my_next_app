import { FC, MouseEvent, useEffect } from 'react';
import * as SC from './NetworksEdit.style';
import { InputAdornment } from '@mui/material';
import Image from 'next/image';
import NetworkInput from '../NetworkInput/NetworkInput';
import { NetworksEditProps } from './NetworksEdit.types';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@/lib/storeHooks';
import { addSocialNetwork, fetchSocialNetworks } from '@/lib/store/profileSlice/profileSlice';
import { useFieldArray } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

const NetworksEdit: FC<NetworksEditProps> = ({ control }) => {
  const ICON_SIZE = 24;
  const { t } = useTranslation();
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const { fields, append, remove, replace } = useFieldArray({
    name: 'networks',
    control,
  });
  const addNetwork = (e: MouseEvent<HTMLButtonElement>) => {
    append({ network_name: '', username: '' });
    dispatch(addSocialNetwork({ network_name: '', username: '', key: uuidv4() }));
    e.preventDefault();
  };

  const getSocialNetwork = async () => {
    try {
      if (user) {
        const data = await dispatch(fetchSocialNetworks({ user_uid: user.uid })).unwrap();
        replace(data);
      }
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  useEffect(() => {
    getSocialNetwork();
  }, []);

  return (
    <SC.Wrapper>
      <SC.Title>{t('edit.networks')}</SC.Title>
      {fields.map((field, index) => {
        return <NetworkInput key={field.id} control={control} index={index} remove={remove} />;
      })}
      <SC.ButtonBlock onClick={addNetwork}>
        <InputAdornment position='start'>
          <Image src='/images/plusBlack.svg' alt='plus icon' height={ICON_SIZE} width={ICON_SIZE} />
        </InputAdornment>
        <SC.Button>{t('edit.addNetworks')}</SC.Button>
      </SC.ButtonBlock>
    </SC.Wrapper>
  );
};

export default NetworksEdit;
