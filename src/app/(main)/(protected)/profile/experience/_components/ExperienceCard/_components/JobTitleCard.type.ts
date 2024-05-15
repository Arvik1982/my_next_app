import { ReactNode } from 'react';

export interface JobTitlesProps {
  companiesLogos: object;
  displayPopup?: boolean;
  FormatWorkDuration: (startDate: string, endDate: string, isGeneral?: boolean) => ReactNode;
}
