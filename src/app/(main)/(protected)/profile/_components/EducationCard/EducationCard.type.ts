interface StudyDates {
  startMonth: string;
  startYear: number;
  endMonth: string;
  endYear: number;
}

export interface Props {
  logo?: string;
  name: string;
  faculty: string;
  dates: StudyDates;
}
