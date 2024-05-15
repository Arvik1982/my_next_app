'use client';
import React from 'react';
import * as SC from './Subscriptions.style';
import { useTranslation } from 'react-i18next';

const company = [
  { name: 'Креативный дизайн', logo: '/images/creative-design.png' },
  { name: 'Яндекс', logo: '/images/yandexCircle.png' },
  { name: 'МГТУ им.  Н.Э. Баумана', logo: '/images/mstu.png' },
];

const Subscriptions = () => {
  const { t } = useTranslation();
  const iconSize = 24;
  const textRange = {
    start: 0,
    end: 19,
  };

  return (
    <SC.Container>
      <SC.Title>{t('main.subscriptions')}</SC.Title>
      {company.map((item, index) => {
        return (
          <SC.Company key={index}>
            <SC.Logo src={item.logo} alt={'logo'} height={iconSize} width={iconSize} />
            <SC.ItemText>
              {item.name.length >= textRange.end
                ? `${item.name.substring(textRange.start, textRange.end)}...`
                : item.name}
            </SC.ItemText>
          </SC.Company>
        );
      })}
      <SC.ItemText></SC.ItemText>
    </SC.Container>
  );
};

export default Subscriptions;
