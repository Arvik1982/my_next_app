import React, { useState, useEffect } from 'react';
import SpecialistCard from '@/app/(main)/specialists/_components/CatalogSpecialists/SpecialistCard/SpecialistCard';
import { Catalog, DropdownInput, SplitButtonGroup } from '@/app/components';
import * as SC from './CatalogSpecialists.style';
import CatalogExperts from '@/app/(main)/specialists/_components/CatalogExperts/CatalogExperts';
import { useTranslation } from 'react-i18next';
import { getSpecialists, setSpecialists } from '@/lib/store/filterSpecialistsSlice/specialistsSlice';
import GlobalFilterInput from '@/app/components/ui/GlobalFilterInput/GlobalFilterInput';
import { useForm } from 'react-hook-form';
import NothingFound from '@/app/(main)/specialists/NothingFound/NothingFound';
import { useAppDispatch, useAppSelector } from '@/lib/storeHooks';
import { ISpecQueryParam } from '@/lib/store/types';

const CatalogSpecialists = () => {
  const { t } = useTranslation();
  const specialists = useAppSelector((state) => state.specialists.specialists);
  const {
    direction,
    specialization,
    professionalSkill,
    priceMin,
    priceMax,
    employmentType,
    rate,
    location,
    readyGo,
    level,
    keywords,
  } = useAppSelector((state) => state.filterSpecialists);
  const SPECIALIST = t('specialists.specialists');
  const EXPERTS = t('specialists.experts');
  const dispatch = useAppDispatch();
  const [openWindow, setOpenWindow] = useState(SPECIALIST);
  const [filters, setFilters] = useState('По дате визита');
  const { control } = useForm();
  const onClickButton = (i: string) => {
    setOpenWindow(i);
  };

  const fetchSpecialists = async (queryParam?: ISpecQueryParam) => {
    try {
      const data = await dispatch(getSpecialists(queryParam)).unwrap();
      dispatch(setSpecialists(data));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  useEffect(() => {
    fetchSpecialists();
  }, []);

  // const filterSpecialistDirection =
  // /!!direction && direction !== 'Любое направление'
  //   /? specialists.filter((i) => i.direction === direction)
  //     : specialists;
  // const filterSpecialists = (specialistsAll: InitialSpecialistsState[], specialization: string[]) => {
  //   if (specialization.length === 0 || specialization[0] === 'Любая специализация') {
  //     return specialistsAll;
  //   }
  //   return specialistsAll.filter((specialist) => specialization.includes(specialist.post));
  // };
  // const filterByPrice = (specialists: InitialSpecialistsState[], priceMin: string, priceMax: string) => {
  //   if (priceMin === '' || priceMax === '') {
  //     return specialists;
  //   }
  //   return specialists.filter((specialist) => {
  //     return +specialist.price >= +priceMin && +specialist.price <= +priceMax;
  //   });
  // };
  // const filterSpecialization = filterSpecialists(filterSpecialistDirection, specialization);
  // const filterByEmploymentType = (specialists: InitialSpecialistsState[], type: string[]) => {
  //   if (type.length === 0 || type[0] === 'Любая занятость') return specialists;
  //   return specialists.filter((specialist) => type.includes(specialist.employmentType));
  // };
  // const filterByRate = (specialists: InitialSpecialistsState[], rate: string) => {
  //   if (rate === '') return specialists;
  //   return specialists.filter((specialist) => specialist.currency === rate);
  // };
  // const filterByLocation = (specialists: InitialSpecialistsState[], location: string[]) => {
  //   if (location.length === 0) return specialists;
  //   return specialists.filter((specialist) => location.includes(specialist.location));
  // };
  // const filterByReadyGo = (specialists: InitialSpecialistsState[], location: string[]) => {
  //   if (location.length === 0) return specialists;
  //   return specialists.filter((specialist) => location.includes(specialist.readyGo));
  // };
  // const filterByLevel = (specialists: InitialSpecialistsState[], level: string[]) => {
  //   if (level.length === 0 || level[0] === 'Любой уровень') return specialists;
  //   return specialists.filter((specialist) => level.includes(specialist.level));
  // };

  // function filterByKeywords(specialists: InitialSpecialistsState[], keywords: string[]) {
  //   const filteredSpecialists = specialists.filter((specialist) => {
  //     if (Array.isArray(specialist.professionalSkills)) {
  //       return specialist.keywords.some((keyword) => keywords.includes(keyword));
  //     } else {
  //       return keywords.includes(specialist.professionalSkills);
  //     }
  //   });

  //   return filteredSpecialists.length > 0 ? filteredSpecialists : specialists;
  // }

  // const professionalBySkills = (specialists: InitialSpecialistsState[], skills: string[]) => {
  //   if (skills.length === 0) return specialists;
  //   return specialists.filter((specialist) => specialist.professionalSkills.some((skill) => skills.includes(skill)));
  // };
  // const filteredSpecialists = filterByPrice(filterSpecialization, priceMin, priceMax);
  // const filterEmploymentType = filterByEmploymentType(filteredSpecialists, employmentType);
  // const filterRate = filterByRate(filterEmploymentType, rate);
  // const filterlocation = filterByLocation(filterRate, location);
  // const filterReadyGo = filterByReadyGo(filterlocation, readyGo);
  // const filterLevel = filterByLevel(filterReadyGo, level);
  // const filterKeywords = filterByKeywords(filterLevel, keywords);
  // const professionalSkills = professionalBySkills(filterKeywords, professionalSkill);
  // useEffect(() => {
  //   const filteredSpecialists = filterByPrice(filterSpecialization, priceMin, priceMax);
  //   const filterEmploymentType = filterByEmploymentType(filteredSpecialists, employmentType);
  //   const filterRate = filterByRate(filterEmploymentType, rate);
  //   const filterlocation = filterByLocation(filterRate, location);
  //   const filterReadyGo = filterByReadyGo(filterlocation, readyGo);
  //   const filterLevel = filterByLevel(filterReadyGo, level);
  //   const filterKeywords = filterByKeywords(filterLevel, keywords);
  //   const professionalSkills = professionalBySkills(filterKeywords, professionalSkill);
  //   setSkills(professionalSkills.filter((i) => skills.some((item) => i.id === item.id)));
  // }, [
  //   professionalSkills.length,
  //   priceMin.length,
  //   priceMax.length,
  //   employmentType.length,
  //   rate.length,
  //   location.length,
  //   readyGo.length,
  //   level.length,
  //   keywords.length,
  //   filterSpecialization.length,
  //   professionalSkill.length,
  //   filterSpecialization.length,
  //   priceMin.length,
  //   priceMax.length,
  //   employmentType.length,
  //   rate.length,
  //   location.length,
  //   readyGo.length,
  //   level.length,
  //   keywords.length,
  //   professionalSkill.length,
  // ]);

  useEffect(() => {
    setOpenWindow(SPECIALIST);
  }, [SPECIALIST]);

  // const [skills, setSkills] = useState<InitialSpecialistsState[]>(professionalSkills);
  const [searchedText, setSearchedText] = useState<string>('');
  return (
    <SC.Container>
      <Catalog>
        <SC.GlobalFilterContaiter>
          <SC.GlobalFilterInputWrapper>
            <GlobalFilterInput
              onClick={() => {}}
              onChange={(newValue) => setSearchedText(newValue)}
              list={specialists}
              placeholder={'Поиск по навыкам, запросам и имени'}
            />
            <DropdownInput
              name={''}
              list={['По дате визита', 'Цена: по убыванию', 'Цена: по возрастанию']}
              placeholder={filters}
              click={(e) => {
                // dispatch(changeMax(e));
                setFilters(e);
              }}
              defaultValue={''}
              helperText={''}
              isRequired={true}
              control={control}
            />
          </SC.GlobalFilterInputWrapper>
          <SC.FoundText>Найдено {specialists.length} экспертов</SC.FoundText>
        </SC.GlobalFilterContaiter>
        <SplitButtonGroup nameButton={[SPECIALIST, EXPERTS]} activeButton={openWindow} onClickButton={onClickButton} />
        {openWindow === SPECIALIST ? (
          specialists.length === 0 ? (
            <NothingFound />
          ) : (
            specialists.map((item) => {
              return <SpecialistCard key={item.uid} specialist={item} searchedText={searchedText} />;
            })
          )
        ) : (
          specialists.map((item) => {
            return <CatalogExperts key={item.uid} specialist={item} />;
          })
        )}
      </Catalog>
    </SC.Container>
  );
};

export default CatalogSpecialists;
