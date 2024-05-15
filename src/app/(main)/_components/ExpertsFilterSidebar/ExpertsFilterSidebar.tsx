'use client';
import * as SC from './ExpertsFilterSidebar.style';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { DropdownInput, FilterButtonsGroup } from '@/app/components';
import TextFieldPrice from '../PageWithFilter/TextFieldPrice/TextFieldPrice';
import FilterElectMenu from '@/app/components/ui/FilterElectMenu/FilterElectMenu';
import { useAppDispatch, useAppSelector } from '@/lib/storeHooks';
import {
  additionallyChange,
  employmentFormatUpdate,
  employmentTypeAdd,
  filterChange,
  InitialStateType,
  keywordsChange,
  levelChange,
  locationChange,
  priceMaxChange,
  priceMinChange,
  professionalSkillsChange,
  rateChange,
  readyGoState,
  removeOption,
  specializationsAdd,
} from '@/lib/store/filterSpecialistsSlice/filterSpecialistsSlice';
import DropdownInputPrice from '@/app/(main)/_components/PageWithFilter/DropdownInputPrice/DropdownInputPrice';
import { useTranslation } from 'react-i18next';
import { AutocompleteIntroductionWithoutControl } from '@/app/components/';
import { getSpecialists } from '@/lib/store/filterSpecialistsSlice/specialistsSlice';

export interface Data {
  data: Record<string, string[]>;
  professionalSkills: Record<string, string[]>;
}
export interface MyObject {
  [key: string]: string[];
}
const ExpertsFilterSidebar: FC<Data> = ({ data, professionalSkills }) => {
  const { level, employmentType, keywords, professionalSkill, specialization, direction, rate, readyGo, location } =
    useAppSelector((state) => state.filterSpecialists);
  const dispatch = useAppDispatch();
  const directionDefault = ['Дизайн', 'Мода', 'Маркетинг', 'Любое направление'];
  const router = useRouter();
  const { watch, control } = useForm();
  const fieldValues = watch();
  const { t } = useTranslation();

  useEffect(() => {
    const queryParams = [];
    for (const field in fieldValues) {
      if (fieldValues[field]) {
        queryParams.push(`${field}=${encodeURIComponent(fieldValues[field])}`);
      }
    }
    const queryString = queryParams.join('&');
    router.push(`?${queryString}`, { scroll: false });
  }, [router]);
  useEffect(() => {
    const currentURL = window.location.href;
    const queryString = currentURL.split('?')[1];

    const urlParams = new URLSearchParams(queryString);
    const params: Record<string, string> = {};

    urlParams.forEach((value, key) => {
      params[key] = value;
    });
    let newQueryString = '';
    for (const key in params) {
      if (newQueryString.length > 0) {
        newQueryString += '&';
      }
      newQueryString += `${key}=${params[key]}`;
    }
    // dispatch(getSpecialists(newQueryString));
  }, [router]);

  const deleteOption = (option: keyof InitialStateType, e: string) => {
    dispatch(removeOption({ option, value: e }));
  };
  function filterObjectByKeys(obj: MyObject, keys: string[]): string[] {
    if (keys.length === 0) {
      return Object.values(obj).flat();
    }
    const filteredValues: string[] = [];
    for (const key in obj) {
      if (keys.includes(key)) {
        filteredValues.push(...obj[key]);
      }
    }
    return filteredValues;
  }
  const filteredObject = filterObjectByKeys(professionalSkills, specialization);
  return (
    <SC.Container>
      <FilterElectMenu />
      <SC.Box>
        <SC.Label>{t('main.direction')}</SC.Label>
        <DropdownInput
          click={(e) => {
            dispatch(filterChange(e));
          }}
          list={directionDefault}
          name='direction'
          control={control}
          placeholder={direction || 'Выберите направление'}
        />
      </SC.Box>
      <SC.Box>
        <AutocompleteIntroductionWithoutControl
          deleteOption={deleteOption}
          options={specialization}
          label={t('main.specialization')}
          placeholder={t('main.selectSpecialization')}
          onClick={(e: string) => dispatch(specializationsAdd(e))}
          name={'specialization'}
          list={data.specialization}
          control={control}
        />
      </SC.Box>
      <SC.Box>
        <AutocompleteIntroductionWithoutControl
          deleteOption={deleteOption}
          options={professionalSkill}
          label={'Профессиональные навыки'}
          placeholder={'Профессиональные навыки'}
          onClick={(e: string) => dispatch(professionalSkillsChange(e))}
          name={'professionalSkill'}
          list={filteredObject}
          control={control}
        />
      </SC.Box>
      {data.level && (
        <SC.Box>
          <AutocompleteIntroductionWithoutControl
            deleteOption={deleteOption}
            options={level}
            label={t('main.level')}
            placeholder={t('main.selectLevel')}
            onClick={(e: string) => dispatch(levelChange(e))}
            name={'level'}
            list={data.level}
            control={control}
          />
        </SC.Box>
      )}
      <SC.Box>
        <AutocompleteIntroductionWithoutControl
          deleteOption={deleteOption}
          options={employmentType}
          label={t('main.typeEmployment')}
          placeholder={t('main.selectType')}
          onClick={(e) => dispatch(employmentTypeAdd(e))}
          name={'employmentType'}
          list={data.employmentType}
          control={control}
        />
      </SC.Box>
      <SC.Box>
        {data.keywords && (
          <SC.Box>
            <AutocompleteIntroductionWithoutControl
              deleteOption={deleteOption}
              options={keywords}
              label={t('main.keywords')}
              placeholder={t('main.selectKeywords')}
              onClick={(e) => dispatch(keywordsChange(e))}
              name={'keywords'}
              list={data.keywords}
              control={control}
            />
          </SC.Box>
        )}
        <SC.Box>
          <SC.Label>{t('main.rate')}</SC.Label>
          <SC.PriceWrapper>
            <TextFieldPrice
              text={t('main.from')}
              onChangePrice={(e) => dispatch(priceMinChange(e))}
              currency={rate}
              control={control}
              name={'priceMin'}
              type={'number'}
            />
            <TextFieldPrice
              text={'До'}
              onChangePrice={(e) => dispatch(priceMaxChange(e))}
              currency={rate}
              control={control}
              name={'priceMax'}
              type={'number'}
            />
          </SC.PriceWrapper>
        </SC.Box>
        <SC.PriceWrapper>
          <DropdownInputPrice name='price' control={control} click={(e) => dispatch(rateChange(e))} />
          <SC.Label>{t('main.selectCurrency')}</SC.Label>
        </SC.PriceWrapper>
      </SC.Box>
      <SC.Box>
        <AutocompleteIntroductionWithoutControl
          deleteOption={deleteOption}
          options={location}
          label={t('main.location')}
          placeholder={t('main.selectLocation')}
          onClick={(e) => dispatch(locationChange(e))}
          name={'location'}
          list={data.location}
          control={control}
        />
      </SC.Box>
      <FilterButtonsGroup
        onClickOption={(e) => dispatch(employmentFormatUpdate(e))}
        list={data.employmentFormat || []}
        label={t('main.formatEmployment')}
        name='employmentFormat'
        control={control}
      />
      <SC.Box>
        <AutocompleteIntroductionWithoutControl
          deleteOption={deleteOption}
          options={readyGo}
          label={'Готовность к работе'}
          placeholder={t('main.selectNeeded')}
          onClick={(e) => dispatch(readyGoState(e))}
          name={'readyGo'}
          list={data.ReadyGo}
          control={control}
        />
      </SC.Box>
      <FilterButtonsGroup
        onClickOption={(e) => dispatch(additionallyChange(e))}
        list={data.additionally || []}
        label={t('main.additionally')}
        name='additionally'
        control={control}
      />
    </SC.Container>
  );
};

export default ExpertsFilterSidebar;
