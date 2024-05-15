import { FC } from 'react';
import * as SC from './ContentAdder.style';

interface Props {
  title: string;
  onClick?: () => void;
}

const ContentAdder: FC<Props> = ({ title, onClick }) => {
  return (
    <SC.Container>
      <SC.AddButton onClick={onClick}>
        <SC.PlusIconStyled />
        <SC.Title>{title}</SC.Title>
      </SC.AddButton>
    </SC.Container>
  );
};

export default ContentAdder;
