import { SidebarItemProps } from '../../Sidebar/SidebarItem/SidebarItem';

type Item = Pick<SidebarItemProps, 'title' | 'subtitle' | 'pageName'>;

export interface ContainerProps {
  items: Item[];
  bottomInfo?: boolean;
}
