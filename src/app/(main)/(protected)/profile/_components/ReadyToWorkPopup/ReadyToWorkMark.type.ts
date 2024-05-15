import { IUser } from '@/lib/store/types';

export interface ReadyToWorkMarkProps {
  work_status: IUser['work_status'] | undefined;
}
