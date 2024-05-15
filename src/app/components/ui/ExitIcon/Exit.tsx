import * as SC from './Exit.style';
import { FC } from 'react';
import { ExitProps } from '@/app/components/ui/ExitIcon/ExitIcon.type';

const Exit: FC<ExitProps> = ({ exit }) => {
  const ICON_SIZE = 30;
  return <SC.Exit onClick={exit} src={'/images/exit.svg'} alt={'exit'} width={ICON_SIZE} height={ICON_SIZE} />;
};

export default Exit;
