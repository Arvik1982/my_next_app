export interface jobTitle {
  jobTitle: string;
  startDate: string;
  endDate: string;
}

export interface company {
  name: string;
  country: string;
  city: string;
  jobTitles: jobTitle[];
}

export interface ExperienceCardProps {
  company: company;
  displayPopup?: boolean;
}
