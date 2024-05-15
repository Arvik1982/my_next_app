'use client';

import { FC, useEffect, useRef } from 'react';
import * as SC from './CompanyDirectory.style';
import Image from 'next/image';
import { CompaniesInDirectoryProps } from '@/app/(main)/catalog/CatalogCompany/CompanyDirectory/CompanyDirectory.type';
import { BookmarkButton } from '@/app/(main)/_components/BookmarkButton/BookmarkButton';
import { useAppDispatch } from '@/lib/storeHooks';
import { changeFavoriteCard } from '@/lib/store/filterCompaniesSlice/companiesSlice';

const CompanyDirectory: FC<CompaniesInDirectoryProps> = ({
  id,
  favorite,
  companyName,
  comment,
  location,
  logo,
  directions,
  searchedText,
}) => {
  const dispatch = useAppDispatch();
  function numWord(value: number, words: string[]) {
    value = Math.abs(value) % 100;
    const num = value % 10;
    if (value > 10 && value < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num == 1) return words[0];
    return words[2];
  }

  const declination = numWord(comment, ['Отзыв', 'Отзыва', 'Отзывов']);

  const iconSizeCompany = 48;

  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = searchedText
        ? companyName.replaceAll(
            new RegExp(searchedText, 'gi'),
            (p) => `<mark style="color: #00a85a; background-color: #00a85a1f">${p}</mark>`,
          )
        : companyName;
    }
  }, [searchedText, companyName]);

  const bookmarkClickHandle = () => {
    dispatch(changeFavoriteCard(id));
  };

  return (
    <SC.BoxContainer>
      <SC.Wrapper>
        <Image src={logo} alt={'logoCompany'} width={iconSizeCompany} height={iconSizeCompany} />
        <SC.AboutCompany>
          <SC.CompanyName ref={ref}>{companyName}</SC.CompanyName>
          <SC.Description>
            <SC.DescriptionText>{directions}</SC.DescriptionText>
            <SC.DescriptionText>{location}</SC.DescriptionText>
            <SC.DescriptionText>
              {declination} {comment}
            </SC.DescriptionText>
          </SC.Description>
        </SC.AboutCompany>
      </SC.Wrapper>
      <BookmarkButton onClick={bookmarkClickHandle} active={favorite} />
    </SC.BoxContainer>
  );
};

export default CompanyDirectory;
