import Image from 'next/image';
import * as SC from './BookmarkButton.style';
import { FC } from 'react';
import { BookmarkButtonProps } from './BookmarkButton.type';

export const BookmarkButton: FC<BookmarkButtonProps> = ({ onClick, active }) => {
  const ICON_SIZE = 24;

  return (
    <SC.Button onClick={onClick}>
      <Image
        src={`images/${active ? 'bookmarkactive' : 'bookmark'}.svg`}
        alt='favorite'
        width={ICON_SIZE}
        height={ICON_SIZE}
      />
    </SC.Button>
  );
};
