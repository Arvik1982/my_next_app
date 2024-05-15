import { FC, MouseEvent, useState } from 'react';
import * as SC from './Select.style';
import Image from 'next/image';
import { ISpecialists } from '@/lib/store/types';
import { Avatar } from '@/app/components';

export interface SelectProps {
  authors: ISpecialists[];
  goToPage: (i: string) => void;
}
const Select: FC<SelectProps> = ({ goToPage, authors }) => {
  const AVATAR_SIZE = 40;
  const EYE_ICON_WIDTH = 14;
  const EYE_ICON_HEIGHT = 10;
  const EYE_LIKE_HEIGHT = 12;
  const EYE_LIKE_WIDTH = 14;
  const [active, setActive] = useState(false);
  const handleGoToPage = (event: MouseEvent<HTMLElement>, id: string) => {
    event.stopPropagation();
    goToPage(id);
    setActive(false);
  };

  const getFullName = (item: ISpecialists) => {
    return `${item.first_name} ${item.second_name}`;
  };
  return (
    <SC.Container>
      <SC.Select>
        <SC.PlaceholderStyle onBlur={() => setActive(false)} onClick={() => setActive(!active)}>
          Несколько авторов
        </SC.PlaceholderStyle>
        <Image src={'/images/like.svg'} alt={'like'} height={EYE_LIKE_HEIGHT} width={EYE_LIKE_WIDTH} />
        <SC.Count>1,2 тыс.</SC.Count>
        <Image src={'/images/eye.svg'} alt={'like'} height={EYE_ICON_HEIGHT} width={EYE_ICON_WIDTH} />
        <SC.Count>1,2 тыс.</SC.Count>
      </SC.Select>
      {active && (
        <SC.OptionContainer>
          <SC.OptionWrapper>
            {authors.map((item) => {
              return (
                <SC.Option key={item.uid} disableRipple>
                  <SC.AvatarContainer>
                    <Avatar size={AVATAR_SIZE} specialist={item} />
                  </SC.AvatarContainer>
                  <SC.TextWrapper>
                    <SC.NameAuthor>{getFullName(item)}</SC.NameAuthor> <SC.Nick>{item.username}</SC.Nick>
                  </SC.TextWrapper>
                  <SC.AboutUser className={'aboutUser'} onClick={(event) => handleGoToPage(event, item.uid)}>
                    о пользователе
                  </SC.AboutUser>
                </SC.Option>
              );
            })}
          </SC.OptionWrapper>
        </SC.OptionContainer>
      )}
    </SC.Container>
  );
};

export default Select;
