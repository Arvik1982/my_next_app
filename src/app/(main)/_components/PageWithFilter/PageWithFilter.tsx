'use client';

import { FC, PropsWithChildren, useEffect, useState } from 'react';
import * as SC from './PageWithFilter.style';
import ExpertsFilterSidebar from '../ExpertsFilterSidebar/ExpertsFilterSidebar';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';
import {
  fashionFilterData,
  fashionSpecialization,
} from '@/app/(main)/_components/ExpertsFilterSidebar/fashionFilterData';
import { desingFilterData, disingSpecialization } from '@/app/(main)/_components/ExpertsFilterSidebar/designFilterData';
import {
  marketingFilterData,
  marketingSpecialization,
} from '@/app/(main)/_components/ExpertsFilterSidebar/marketingFilterData';

const PageWithFilter: FC<PropsWithChildren> = ({ children }) => {
  const a = useSelector<RootState, string>((state) => state.filterSpecialists.direction);
  const [data, setData] = useState(fashionFilterData);
  const [professionalSkills, setProfessionalSkills] = useState<Record<string, string[]>>(disingSpecialization);

  useEffect(() => {
    a === 'Мода'
      ? setProfessionalSkills(fashionSpecialization)
      : a === 'Дизайн'
        ? setProfessionalSkills(disingSpecialization)
        : a === 'Маркетинг'
          ? setProfessionalSkills(marketingSpecialization)
          : setProfessionalSkills(disingSpecialization);
  }, [a]);
  useEffect(() => {
    a === 'Мода'
      ? setData(fashionFilterData)
      : a === 'Дизайн'
        ? setData(desingFilterData)
        : a === 'Маркетинг'
          ? setData(marketingFilterData)
          : setData(desingFilterData);
  }, [a]);
  return (
    <SC.Container>
      {children}
      <ExpertsFilterSidebar data={data} professionalSkills={professionalSkills} />
    </SC.Container>
  );
};

export default PageWithFilter;
