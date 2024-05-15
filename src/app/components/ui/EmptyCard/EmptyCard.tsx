import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';
import * as SC from './EmptyCard.style';
import { EmptyCardProps } from './EmptyCard.type';

const EmptyCard: FC<PropsWithChildren<EmptyCardProps>> = ({ icon, mainText, secondaryText, children }) => {
  const ICON_SIZE = 24;

  return (
    <SC.Container>
      <SC.IconBlock>
        <Image src={icon} alt='card-icon' width={ICON_SIZE} height={ICON_SIZE} />
      </SC.IconBlock>
      <SC.TextBlock>
        <SC.MainText>{mainText}</SC.MainText>
        <SC.SecondaryText>{secondaryText}</SC.SecondaryText>
      </SC.TextBlock>
      {children}
    </SC.Container>
  );
};

export default EmptyCard;
