import { ISpecialists } from '@/lib/store/types';

export interface FilledInfoProps {
  specialist: ISpecialists;
  openAboutMeModal: () => void;
  openContactsModal: () => void;
  openLinksModal: () => void;
  openExperienceModal: () => void;
  openEducationModal: () => void;
  openSkillsModal: () => void;
}
