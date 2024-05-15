'use client';
import React from 'react';

import * as SC from './NothingFound.style';
import { useTranslation } from 'react-i18next';

const NothingFound = () => {
  const { t } = useTranslation();
  return (
    <SC.Container>
      <SC.Search>
        <SC.SearchImage src={'/images/search.svg'} alt={'search'} width={18} height={18} />
      </SC.Search>
      <SC.Title>{t('specialists.nothingFoundTitle')}</SC.Title>
      <SC.Reference>{t('specialists.nothingFound')}</SC.Reference>
    </SC.Container>
  );
};

export default NothingFound;
