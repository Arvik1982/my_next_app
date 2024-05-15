import { FC, MouseEvent } from 'react';
import * as SC from './NetworkInput.style';
import { Input, SingleDropdownInput } from '@/app/components';
import Image from 'next/image';
import { NetworkInputProps } from './NetworkInput.types';
import { useAppDispatch, useAppSelector } from '@/lib/storeHooks';
import { useTranslation } from 'react-i18next';
import { deleteSocialNetwork, removeSocialNetwork } from '@/lib/store/profileSlice/profileSlice';

const selectData = ['Telegram', 'VK'];

const NetworkInput: FC<NetworkInputProps> = ({ control, index, remove }) => {
  const ICON_SIZE = 24;
  const contacts = useAppSelector((state) => state.profile.contacts);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const deleteNetwork = async (id?: number) => {
    try {
      await dispatch(deleteSocialNetwork({ social_network_id: id })).unwrap();
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const removeInput = (e: MouseEvent<HTMLButtonElement>, index: number) => {
    if (contacts.networks[index]?.id) {
      deleteNetwork(contacts.networks[index].id);
    }
    dispatch(removeSocialNetwork(contacts.networks[index]?.key));
    remove(index);
    e.preventDefault();
  };

  return (
    <SC.Wrapper>
      <SC.DropdownInputBlock>
        <SC.HiddenInput>
          <Input
            type={'number'}
            name={`networks.${index}.id`}
            control={control}
            defaultValue={contacts.networks[index]?.id}
          />
        </SC.HiddenInput>
        <SingleDropdownInput
          placeholder={t('edit.selectNetworkName')}
          list={selectData}
          name={`networks.${index}.network_name`}
          control={control}
          defaultValue={contacts.networks[index]?.network_name}
        />
      </SC.DropdownInputBlock>
      <Input
        placeholder={t('edit.enterUserName')}
        type={'text'}
        name={`networks.${index}.username`}
        control={control}
        defaultValue={contacts.networks[index]?.username}
      />
      <SC.BasketButton onClick={(e) => removeInput(e, index)}>
        <Image src='/images/basket.svg' alt='basket icon' height={ICON_SIZE} width={ICON_SIZE} />
      </SC.BasketButton>
    </SC.Wrapper>
  );
};

export default NetworkInput;
