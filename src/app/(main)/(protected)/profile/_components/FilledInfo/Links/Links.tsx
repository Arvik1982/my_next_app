import React, { FC } from 'react';
import { LinksProps } from './Links.types';
import * as SC from './Links.style';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const networks = ['Telegram', 'Habr'];

const Links: FC<LinksProps> = ({ specialist, openLinksModal }) => {
  const ICON_SIZE = 16;
  const { t } = useTranslation();

  return (
    <SC.Wrapper>
      <SC.TitleBlock onClick={openLinksModal}>
        <SC.Title>{t('specialists.links')}</SC.Title>
        <Image src={'/images/arrow-right.svg'} alt='arrow-right icon' width={ICON_SIZE} height={ICON_SIZE} />
      </SC.TitleBlock>
      <SC.InfoBlock>
        {networks.map((network) => (
          <SC.ItemBlock key={network}>
            <SC.Item>
              {network}
              <Image
                src={'/images/arrow-up-right.svg'}
                alt='arrow-up-right icon'
                width={ICON_SIZE}
                height={ICON_SIZE}
              />
            </SC.Item>
          </SC.ItemBlock>
        ))}
      </SC.InfoBlock>
    </SC.Wrapper>
  );
};

export default Links;
