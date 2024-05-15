import { FC } from 'react';
import { ExperienceCardProps } from './ExperienceCard.type';
import { SingleJobTitleCard } from './_components/SingleJobTitleCard/SingleJobTitleCard';
import { MultiJobTileCard } from './_components/MultiJobTitleCard/MultiJobTitleCard';

const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
const companiesLogos = {
  yandex: '/images/yandex.svg',
  яндекс: '/images/yandex.svg',
  vk: '/images/vk.svg',
};

export const ExperienceCard: FC<ExperienceCardProps> = ({ company, displayPopup }) => {
  const FormatWorkDuration = (startDate: string, endDate: string, isGeneral?: boolean) => {
    if (endDate === 'настоящее время') endDate = Date();

    const getMonth = (date: string) => {
      return +new Date(date).getMonth();
    };

    const getYear = (date: string) => {
      return +new Date(date).getFullYear();
    };

    const allTimeCalculate = () => {
      let acc = 0;

      for (let i = 0; i < company.jobTitles.length; i++) {
        const endDate =
          company.jobTitles[i].endDate === 'настоящее время' ? new Date() : new Date(company.jobTitles[i].endDate);
        acc += +endDate - +new Date(company.jobTitles[i].startDate);
      }
      const resultDate = new Date(acc);

      return `${resultDate.getFullYear() === 1970 ? '' : `${resultDate.getFullYear() - 1970} г. `}${resultDate.getMonth() + 1} мес.`;
    };

    const workTimeCalculate = (startDate: string, endDate: string) => {
      const date = new Date(new Date(endDate).getTime() - new Date(startDate).getTime());
      return `${date.getFullYear() === 1970 ? '' : `${date.getFullYear() - 1970} г. `}${date.getMonth() + 1} мес.`;
    };

    return `${months[getMonth(startDate)]} ${getYear(startDate)} - ${endDate === Date() ? 'настоящее время・' : `${months[getMonth(endDate)]} ${getYear(endDate)}・`}${isGeneral ? allTimeCalculate() : workTimeCalculate(startDate, endDate)}`;
  };

  return company.jobTitles.length < 2 ? (
    <SingleJobTitleCard
      company={company}
      displayPopup={displayPopup}
      companiesLogos={companiesLogos}
      FormatWorkDuration={FormatWorkDuration}
    />
  ) : (
    <MultiJobTileCard
      company={company}
      displayPopup={displayPopup}
      companiesLogos={companiesLogos}
      FormatWorkDuration={FormatWorkDuration}
    />
  );
};
