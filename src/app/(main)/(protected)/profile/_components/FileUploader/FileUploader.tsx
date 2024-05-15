import * as SC from './FileUploader.style';

import React, { FC, useState } from 'react';
import { Control, Controller, FieldValues, UseFormWatch } from 'react-hook-form';

import { ContentAdder } from '@/app/components';
import Image from 'next/image';
import { IconButton } from '@mui/material';

interface Props {
  name: string;
  title: string;
  control: Control<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  isRequired?: boolean;
}

const FileUploader: FC<Props> = ({ name, title, control, watch, isRequired = false }) => {
  const [miniImg, setMiniImg] = useState('');
  const FReader = new FileReader();
  const FileName = watch(name)?.name;
  const ICON_SIZE = 24;
  const MINIIMG_SIZE = 44;

  watch(name) && FReader.readAsDataURL(watch(name));

  FReader.onloadend = (e) => {
    setMiniImg(e.target?.result as string);
  };

  return (
    <>
      {miniImg && (
        <SC.MiniImgContainer
          secondaryAction={
            <IconButton aria-label='etc' disableRipple>
              <Image src={'/images/more.svg'} alt='etc' width={ICON_SIZE} height={ICON_SIZE} />
            </IconButton>
          }
        >
          <Image src={miniImg} alt='mini-sert' width={MINIIMG_SIZE} height={MINIIMG_SIZE} />
          <SC.TextsBlock>
            <SC.FileName>{FileName && FileName.slice(0, FileName.length - 4)}</SC.FileName>
            <SC.FileFormat>{FileName && FileName.slice(FileName.length - 3)}</SC.FileFormat>
          </SC.TextsBlock>
        </SC.MiniImgContainer>
      )}
      <Controller
        name={name}
        control={control}
        rules={{ required: isRequired }}
        render={({ field: { onChange } }) => (
          <SC.Container>
            <SC.StyledInput
              type='file'
              id='file-upload'
              accept='image/*'
              onChange={(e) => e.target.files?.[0] && onChange(e.target.files[0])}
            />
            <SC.Label htmlFor='file-upload'>
              <ContentAdder title={title} />
            </SC.Label>
          </SC.Container>
        )}
      />
    </>
  );
};

export default FileUploader;
