import { FC } from 'react';
import { ContainerProps } from './Container.type';
import SidebarContainer from '../../Sidebar/Sidebar';
import SidebarItem from '../../Sidebar/SidebarItem/SidebarItem';
import * as SC from './Container.style';
import { Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { formatDate } from '@/utils/utils';
import { useAppSelector } from '@/lib/storeHooks';

const Container: FC<ContainerProps> = ({ bottomInfo, items }) => {
  const { t } = useTranslation();
  const user = useAppSelector((state) => state.auth.user);
  return (
    <SC.ContainerBox>
      {items.map((item, idx) => (
        <>
          <SidebarContainer key={item.title}>
            <SidebarItem {...item} plusIconColor='black' />
          </SidebarContainer>
          {idx < items.length - 1 || bottomInfo ? <Divider variant='middle' /> : null}
        </>
      ))}
      {bottomInfo && (
        <SC.BottomBlock>
          <span>{t('profile.onSiteSince', { date: formatDate(user?.registered_at) })}</span>
          <SC.ComplaintBtn>{t('profile.complain')}</SC.ComplaintBtn>
        </SC.BottomBlock>
      )}
    </SC.ContainerBox>
  );
};

export default Container;
