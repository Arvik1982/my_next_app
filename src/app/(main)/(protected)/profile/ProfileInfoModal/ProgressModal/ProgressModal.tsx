'use client';
import { FC } from 'react';
import ProfileInfoModal from '../ProfileInfoModal';
import * as SC from './ProgressModal.style';
import Image from 'next/image';
import { ProgressModalProps } from './ProgressModal.type';

const ProgressModal: FC<ProgressModalProps> = ({ exit, progress }) => {
  return (
    <ProfileInfoModal exit={exit} open>
      <SC.Title>Достижения</SC.Title>
      <SC.Container>
        {progress.map((i) => {
          return (
            <SC.ProgressContainer key={i.name}>
              <Image src={i.logo} alt={'logo'} width={44} height={44} />
              <SC.TextContent>
                <SC.Name>{i.name}</SC.Name>
                <SC.Place>{i.place}</SC.Place>
              </SC.TextContent>
            </SC.ProgressContainer>
          );
        })}
      </SC.Container>
    </ProfileInfoModal>
  );
};

export default ProgressModal;
