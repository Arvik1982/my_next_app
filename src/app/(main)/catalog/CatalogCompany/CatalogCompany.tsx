'use client';
import React, { useState } from 'react';
import Catalog from '@/app/components/ui/Catalog/Catalog';
import CompanyDirectory from '@/app/(main)/catalog/CatalogCompany/CompanyDirectory/CompanyDirectory';
import * as SC from '@/app/(main)/specialists/_components/CatalogSpecialists/CatalogSpecialists.style';
import GlobalFilterInput from '@/app/components/ui/GlobalFilterInput/GlobalFilterInput';
import { InitialCompaniesState } from '@/lib/store/filterCompaniesSlice/companiesSlice';
import { RootState } from '@/lib/store/store';
import { useSelector } from 'react-redux';

const CatalogCompany = () => {
  const companiesState = useSelector<RootState, InitialCompaniesState[]>((state) => state.companiesSlice);
  const [companies, setCompanies] = useState<InitialCompaniesState[]>(companiesState);
  const [searchedText, setSearchedText] = useState<string>('');

  return (
    <Catalog>
      <SC.GlobalFilterContaiter>
        <SC.GlobalFilterInputWrapper>
          <GlobalFilterInput
            placeholder={'Поиск по навыкам, запросам и имени'}
            list={companiesState}
            onClick={(e: InitialCompaniesState[]) => setCompanies(e)}
            onChange={(newValue) => setSearchedText(newValue)}
          />
        </SC.GlobalFilterInputWrapper>
        <SC.FoundText>Найдено {companies.length} компании</SC.FoundText>
      </SC.GlobalFilterContaiter>
      {companiesState
        .filter((i) => companies.some((item) => item.id === i.id))
        .map((item, index) => {
          return (
            <CompanyDirectory
              key={index}
              id={item.id}
              favorite={item.favorite}
              companyName={item.companyName}
              logo={item.logo}
              directions={item.directions}
              location={item.location}
              comment={item.comment}
              searchedText={searchedText}
            />
          );
        })}
    </Catalog>
  );
};

export default CatalogCompany;
