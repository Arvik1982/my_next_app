import { FC, MouseEvent } from 'react';
import * as SC from './SelectAuthors.style';
import { ISpecialists } from '@/lib/store/types';
import { Avatar } from '@/app/components';

export interface SelectAuthorsProps {
  authors: ISpecialists[];
  goToPage: (i: string) => void;
}
const SelectAuthors: FC<SelectAuthorsProps> = ({ authors, goToPage }) => {
  const ICON_SIZE = 40;
  const handleGoToPage = (event: MouseEvent<HTMLElement>, id: string) => {
    event.stopPropagation();
    goToPage(id);
  };

  const getFullName = (item: ISpecialists) => {
    return `${item.first_name} ${item.second_name}`;
  };

  return (
    <SC.Container>
      <SC.StyledSelect
        displayEmpty
        renderValue={() => {
          return <SC.PlaceholderStyle>Несколько авторов</SC.PlaceholderStyle>;
        }}
        value={''}
      >
        {authors.map((item) => (
          <SC.Option key={item.uid} disableRipple>
            <SC.AvatarContainer>
              <Avatar size={ICON_SIZE} specialist={item} />
            </SC.AvatarContainer>
            <SC.TextWrapper>
              <SC.NameAuthor>{getFullName(item)}</SC.NameAuthor> <SC.Nick>{item.username}</SC.Nick>
            </SC.TextWrapper>
            <SC.AboutUser className={'aboutUser'} onClick={(event) => handleGoToPage(event, item.uid)}>
              о пользователе
            </SC.AboutUser>
          </SC.Option>
        ))}
      </SC.StyledSelect>
    </SC.Container>
  );
};

export default SelectAuthors;
